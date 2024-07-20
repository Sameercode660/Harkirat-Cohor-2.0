import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient()

export const ConnectDB = async () => {
    try {
        await prisma.$connect()
        console.log("Db is connected successfully")
    } catch (error) {
        console.log(error)
    }
}