import { Router } from "express";
import { CreateUser, getAllUsers } from "../controllers/user";

export const userRouter = Router();

userRouter.get("/users", getAllUsers)
userRouter.post('/users', CreateUser);