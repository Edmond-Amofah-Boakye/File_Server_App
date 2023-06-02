import sendEmail from "../utils/SendEmail.js";
import userModel from "../model/UserModel.js";
import tokenModel from "../model/TokenModel.js";
import AppError from "../utils/AppError.js";

const filterObject = (obj, ...allowedFields) =>{
  const newObj = {}
  Object.keys(obj).forEach(field=>{
    if(allowedFields.includes(field)){
      newObj[field] = obj[field]
    }
  })
  return newObj
}


export async function login(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("provide credentials", 404));
  }

  try {
    const userExists = await userModel.findOne({ email }).select("+password");
    if (!userExists) {
      return next(new AppError("no user found", 404));
    }

    if (userExists.confirmed === false) {
      return next(
        new AppError(
          "cannot login, please confirm your account through your emal",
          403
        )
      );
    }

    if (
      userExists &&
      (await userExists.comparePassword(password, userExists.password))
    ) {
      const token = userExists.generateToken();
      return res.status(201).json({
        message: "login successful",
        token,
      });
    }
    console.log(req.user);

    return next(new AppError("invalid credentials", 401));
  } catch (error) {
    next(error);
  }
}

//verify account

export async function verifyEmail(req, res, next) {
  const { token } = req.params;
  try {
    const findToken = await tokenModel.findOne({
      confirmationToken: token,
    });

    if (!findToken) {
      return next(new AppError("sorry, invalid link"), 404);
    }
    const user = await userModel.findOne({ _id: findToken.id });
    if (!user) {
      return next(new AppError("cannot find user"), 404);
    }
    
    //set confirmation token to false
    findToken.confirmationToken = undefined;
    await findToken.save();
    
    //change user confrimation status to true
    user.confirmed = true;
    await user.save();

    res.status(200).json({
      message: "Activation Successful",
    });
  } catch (error) {
    next(error);
  }
}

//forgotpassword

export async function forgotPassword(req, res, next) {
  const { email } = req.body;
  try {
    const userExists = await userModel.findOne({ email });
    if (!userExists) {
      return next(new AppError("user email do not exist", 404));
    }

    const userInTokenModel = await tokenModel.findOne({ id: userExists._id });
    if (!userInTokenModel) {
      return next(new AppError("user do not exist", 404));
    }

    const token = userInTokenModel.generteReseteToken();
    await userInTokenModel.save();

    //sending email
    const url = `http://localhost:5173/password/reset/${token}`;
    new sendEmail(userExists.email, url).resetpassword();

    res.status(201).json({
      message: "success",
    });
  } catch (error) {
    next(error);
  }
}

//reset password
export async function resetPassword(req, res, next) {
  const { token } = req.params;
  const { password } = req.body;
  try {
    //check token
    const tokenExists = await tokenModel.findOne({
      resetPaddwordToken: token,
      resetPasswordTokenExpiration: { $gt: Date.now() },
    });
    if (!tokenExists) {
      return next(new AppError("link expired", 403));
    }
    //find user 
    const userExists = await userModel.findOne({ _id: tokenExists.id });
    
    //save new password
    userExists.password = password;
    await userExists.save();

    tokenExists.resetPaddwordToken = undefined;
    tokenExists.resetPasswordTokenExpiration = undefined;
    await tokenExists.save()

    res.status(200).json({
      message: "password reset successful",
    });
  } catch (error) {
    next(error);
  }
}

//find me
export async function findMe(req, res, next){
  try {
    const user = await userModel.findById(req.user.id)

    if(!user){
      return next(new AppError("cannot find user", 404))
    }

    res.status(200).json({
      message: " success",
      user
    })
    
  } catch (error) {
    next(error)
  }
}



//edit me
export async function editMe(req, res, next){
  try {

    const filterBody = filterObject(req.body, "name", "email")
    if(req.file){
      filterBody.picture = req.file.filename;
    }

    const user = await userModel.findByIdAndUpdate(req.user.id, filterBody, {
      new: true,
      runValidators: true
    })
   
    res.status(200).json({
      message: " success",
      user
    })

  } catch (error) {
    next(error)
  }
}

//change logged in user password

export async function changePassword(req, res, next){
  try {
    const userExists = await userModel.findById(req.user.id)
    if(!userExists){
      return next(new AppError("user does not exists", 404))
    }
  
    userExists.password = req.body.password;
    await userExists.save()
  
    res.status(200).json({
      message: " password sucessfully updated",
      userExists
    })
    
  } catch (error) {
    next(error)
  }
}


//delete me
export async function deleteMe(req, res, next){
  await userModel.findByIdAndUpdate(req.user.id, {active: false})

  res.status(204).json({
    status: "success",
    data: null
  })
}

