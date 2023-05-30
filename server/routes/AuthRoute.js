import auth from '../middleware/auth.js'
import uploads from '../middleware/upload.js'
import * as AuthController from '../controller/AuthController.js'
import { Router } from "express";

const router = Router()


router.route('/login')
    .post(AuthController.login)

router.route('/verify/email/:token')
    .get(AuthController.verifyEmail)


router.route('/verify/email/:token')
    .get(AuthController.verifyEmail)

router.route('/password/forgot')
    .post(AuthController.forgotPassword)

router.route('/password/reset/:token')
    .post(AuthController.resetPassword)

router.route('/me')
    .get(auth, AuthController.findMe)

router.route('/edit/me')
    .patch(auth, uploads.single("image"), AuthController.editMe)

router.route('/delete/me')
    .delete(auth, AuthController.deleteMe)

export default router;