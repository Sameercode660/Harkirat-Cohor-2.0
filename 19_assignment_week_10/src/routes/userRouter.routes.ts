import { Router } from "express";
import { createUser, loginUser } from "../controllers/user.contoller";

const userRouter = Router()

userRouter.post('/createUser', createUser);
userRouter.post('/loginUser', loginUser)

export {
    userRouter
}