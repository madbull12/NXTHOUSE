import { db } from "@/lib/db";
import {  registerSchemaValidator } from "@/lib/validations/auth";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  const body  = await req.json();
  const { name,email,password,confirmPassword } = registerSchemaValidator.parse(body);
  // const { email, password, confirmPassword, name }: RegisterRequest =
  //   await req.json();
  const hashed = await hash(password, 12);

  try {
    const userExisted = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!!userExisted) {
      return new Response("Email already registered", { status: 400 });
    }

    await db.user.create({
      data: {
        email,
        password: hashed,
        name,
        
      },
    });
  } catch (err) {
    return new Response("Bad Request", { status: 400 });
  }

  return new Response("Account created", { status: 201 });
}
