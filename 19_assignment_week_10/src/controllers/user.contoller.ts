import { Request, Response } from "express";
import { prisma } from "../db/connection.db";

const createUser = async(req: Request, res: Response) => {
    try {
        res.status(200).json('Successfully running')
    } catch (error) {
        
    }
}

const loginUser = async(req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
}

export {
    createUser, 
    loginUser
}



