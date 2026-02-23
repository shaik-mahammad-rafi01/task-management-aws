import { createNewUser, getUsers } from "../services/user";
import { Request , response, Response } from "express";

export const getAllUsers = async (request: Request, response: Response) => {
    try {
        const users = await getUsers();
        return response.status(200).json(users)
    }
    catch (error: any) {
        return response.status(500).json({ error: error.message })
    }

}

export const CreateUser = async (req: Request, res: Response) => {
    try {
        const {name , email} = req.body;
        if(!name || !email){
            response.status(400).json({Message : "provide name and email"})
        }
        const user = await createNewUser(name , email);
        if (user) {
            res.status(201).json(user);
        } else {
            res.status(400).json({ message: "Failed to create user" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};