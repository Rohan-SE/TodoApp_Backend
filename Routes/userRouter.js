import express from 'express'
import userController from '../Controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/User/Create',userController.createUser);

export default userRouter;