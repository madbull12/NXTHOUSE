import { z } from "zod";

export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(4,{message:"Password should be at least 4 characters"})
})