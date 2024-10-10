import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";
import db from "@/lib/db";
import { compareSync } from "bcrypt-ts";
import type { NextAuthConfig } from "next-auth"
 
// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [
        GithubProvider({
          clientId: process.env.GITHUB_ID as string,
          clientSecret: process.env.GITHUB_SECRET as string,
          authorization: {
            params: { scope: 'read:user user:email' },
          },
          allowDangerousEmailAccountLinking: true,
        }),
        Credentials({
          credentials: {
            email: {
              label: 'Email',
              type: 'email',
              placeholder: 'email@exemplo.com.br',
            },
            password: { label: 'Senha', type: 'password' },
          },
          async authorize(credentials) {
    
            const email = credentials.email as string;
            const password = credentials.password as string;
          
            if(!email || !password) {
              return null;
            }
          
            const user = await db.user.findUnique({
              where: {
                email: email,
              }
            })
          
            if(!user) {
              return null;
            }
          
            const passwordMatch = compareSync(password, user.password ?? '');
            if (!passwordMatch) {
              return null;
            }
          
            return user;
          },
      })]
} satisfies NextAuthConfig