import { z } from "zod";

export const loginSchemaValidator = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerSchemaValidator = z
  .object({
    name: z.string().min(4,{ 
        message:"Name should be more than 4 characters"
    }),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
  .refine((data) => /^.{9,}$/.test(data.password), {
    message: "Password should be more than 8 characters",

    path: ["password"],
  })
  .refine((data) => /^(?=.*[A-Z]).{9,}$/.test(data.password), {
    message: "Password should have at least 1 capital letter",

    path: ["password"],
  })

  .refine((data) => /^(?=.*[A-Z])(?=.*\d.*\d).{9,}$/.test(data.password), {
    message: "Password should have at least 2 digits",

    path: ["password"],
  })
  .refine(
    (data) =>
      /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*]).{9,}$/.test(data.password),
    {
      message: "Password should have at least 1 symbol",

      path: ["password"],
    }
  );

export type RegisterRequest = z.infer<typeof registerSchemaValidator>;
