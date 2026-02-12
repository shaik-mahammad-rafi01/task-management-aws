import { Router } from "express";
import { getAllUsers } from "../controllers/user";

export const userRouter = Router();

userRouter.get("/users", getAllUsers)