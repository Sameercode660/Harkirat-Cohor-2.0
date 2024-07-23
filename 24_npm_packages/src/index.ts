import { z } from 'zod'


export const userInputSchma = z.object({
    name: z.string(),
    email: z.string().email(),
    age: z.number().min(0)
})


export type inferUserInput = z.infer<typeof userInputSchma>