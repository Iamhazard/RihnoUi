import { z } from "zod";

export const SignupSchema=z.object({
    email:z.string().email(),
    password:z.string().min(8,{message:"Password must be 8 characters long"}),
})

 export type TAuthCredentialsValidator=z.infer<typeof SignupSchema>