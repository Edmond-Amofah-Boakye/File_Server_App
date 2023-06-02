import auth from '../middleware/auth.js'
import restrictAccessTo from '../middleware/restrictAcessTo.js';
import fileUpload from '../middleware/fileuploads.js'
import * as FileController from '../controller/FileController.js'
import { Router } from "express";

const router = Router()

//protect all routes under this

router.use(auth)
router.route("/downloads/:id").patch(FileController.updateFileDownloads)
router.route("/email/:id").post(FileController.sendFiletoEmail)

//restricting to only admin
router.use(restrictAccessTo("admin"))

router.route("/create").post(fileUpload.single("file"), FileController.createFile)
router.route("/").get(FileController.getFiles)

router.route("/:id")
    .get(FileController.getFile)
    .patch(fileUpload.single("file"), FileController.updateFile)
    .delete(FileController.deleteFile)

    





export default router;