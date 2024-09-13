import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import { db } from "./db";
import { compare } from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

export default {
    adapter: PrismaAdapter(db),
    providers: [Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }), Credentials({
        name: "Sign in",
        credentials: {
            email: {
                label: "Email",
                type: "email",
                placeholder: "hello@example.com",
            },
            password: {
                label: "Password",
                type: "password",
            },
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
                return null;
            }

            const user = await db.user.findUnique({
                where: {
                    email: credentials.email as string,
                },
            });

            if (!user) {
                throw new Error("No user found in this email!")
            };

            const isPasswordValid = await compare(
                credentials.password as string,
                user.password!
            );

            if (!isPasswordValid) {
                throw new Error("Invalid password!")
            }

            return user;
        },
    })],
    callbacks: {
        async session({ token, session }) {
          if (token) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token?.email as string;
            session.user.image = token.picture;
          }
    
          return session;
        },
        async jwt({ token, user }) {
          const dbUser = await db.user.findFirst({
            where: {
              email: token.email,
            },
          });
    
          if (!dbUser) {
            if (user) {
              token.id = user?.id as string;
            }
            return token;
          }
    
          return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            picture: dbUser.image,
          };
        },
      },
    
} satisfies NextAuthConfig