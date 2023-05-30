import AppError from '../utils/AppError.js'
import multer from 'multer';

const multerStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads')
    },


    filename: (req, file, cb)=>{
        const ext = file.mimetype.split("/")[1]
        cb(null, `user-${req.user._id}-${Date.now()}.${ext}`)
    }
})


// const fileFilter = (req, file, cb) =>{
//     if(file.filename.endsWith(".csv")){
//         cb(new AppError("file type not required", 400), false)
//     }else{
//         cb(null, true)
//     }
// }


const upload = multer({
    storage: multerStorage,
})


export default upload;