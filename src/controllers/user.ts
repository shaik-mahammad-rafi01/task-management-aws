import { getUsers } from "../services/user";
import { Request , Response } from "express";

export const getAllUsers = async (request: Request, response: Response) => {
    try {
        const users = await getUsers();
        return response.status(200).json(users)
    }
    catch (error: any) {
        return response.status(500).json({ error: error.message })
    }

}