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
    const allowedFiles = ["application/pdf", "image/jpg", "image/jpeg", "mage/gif", "image/png", "audio/mpeg", "video/mp4"]
    
    if(allowedFiles.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(new AppError("file not supported", 400), false)
    }
}


const upload = multer({
    storage: multerStorage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1 * 1024 * 1024 * 1024// max file size 2GB = 
      },
})


export default upload;