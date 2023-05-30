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


const fileFilter = (req, file, cb) =>{
    if(file.mimetype.startsWith("image")){
        cb(null, true)
    }else{
        cb(new AppError("file shhould be image", 400), false)
    }
}


const upload = multer({
    storage: multerStorage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1000000
    }
})


export default upload;