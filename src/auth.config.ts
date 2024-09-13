import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import { db } from "./lib/db";
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
      jwt({ token, account, user }) {
        if (account) {
          token.accessToken = account.access_token
          token.id = user?.id as string
        }
        return token
      },
      session({ session, token }) {
          // I skipped the line below coz it gave me a TypeError
          // session.accessToken = token.accessToken;
          session.user.id = token.id;
    
          return session;
        },
      },
    
} satisfies NextAuthConfig