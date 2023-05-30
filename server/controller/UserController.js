import sendEmail from "../utils/SendEmail.js";
import userModel from "../model/UserModel.js";
import tokenSchema from '../model/TokenModel.js'
import AppError from '../utils/AppError.js'

//creating user
export async function createUser(req, res, next) {
  const { name, email, password } = req.body;
  const user = new userModel({
    name,
    email,
    password,
  });

  try {
    if(!user){
        return next(new AppError("could not create user", 401))
    }
    await user.save();

    const token = user.generateConfirmationToken()

    //save user to token schema
    const newToken = new tokenSchema({
      id: user._id,
      confirmationToken: token
    })

    await newToken.save()

    //sending email
    const userName = user.name.split(" ")[0]
    const url = `http://localhost:5173/verify/${newToken.confirmationToken}`
    new sendEmail(user.email, url, userName).verifyEmail()
       
    res.status(201).json({
      message: "user successfully created",
      user,
    });
  } catch (error) {
    next(console.log(error));
  }
}

//get all users

export async function getAllUsers(req, res, next){
  try {
    const users = await userModel.find({})
    if(users.length === 0){
      return next(new AppError("no users found", 404))
    }

    return res.status(200).json({
      message: "success",
      users
    })
  } catch (error) {
    next(error)
  }
}





//edit user

export async function editUser(req, res, next){

}


//get single user

export async function findUser (req, res, next){
  const { id } = req.params;

  try {
    const user = await userModel.findById(id)
    if(!user){
      return next(new AppError("no user found", 404))
    }
    return  res.status(200).json({
      message: "success",
      user
    })
  } catch (error) {
    next(error)
  }
}

//delete user 

export async function deleteUser (req, res, next){
  const { id } = req.params
  try {
    const deleted = await userModel.findById(id)
    deleted.active = false;
    await deleted.save()

    if(!deleted){
      return next(new AppError("could not delete"), 500)
    }

    return res.status(400).json({
      message: "sucessfully deleted"
    })

  } catch (error) {
    next(error)
  }
}