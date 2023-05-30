import auth from '../middleware/auth.js'
import fileUpload from '../middleware/fileuploads.js'
import * as FileController from '../controller/FileController.js'
import { Router } from "express";

const router = Router()

router.route("/create")
    .post(auth, fileUpload.single("file"), FileController.createFile)

router.route("/")
    .get(auth, FileController.getFiles)

router.route("/:id")
    .get(auth, FileController.getFile)
    .patch(auth, fileUpload.single("file"), FileController.updateFile)
    .delete(auth, FileController.deleteFile)

router.route("/downloads/:id")
    .patch(auth, FileController.updateFileDownloads)

router.route("/email/:id")
    .post(auth, FileController.sendFiletoEmail)
    





export default router;