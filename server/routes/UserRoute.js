import * as UserController from '../controller/UserController.js'
import { Router } from "express";

const router = Router()

router.route('/')
    .post(UserController.createUser)
    .get(UserController.getAllUsers)


router.route('/:id')
    .get(UserController.findUser)
    .patch(UserController.editUser)
    .delete(UserController.deleteUser)




export default router;