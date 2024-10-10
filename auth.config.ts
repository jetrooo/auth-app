import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts";
import { sql } from '@vercel/postgres';
import type { NextAuthConfig } from "next-auth";

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
        const email = credentials?.email as string;
        const password = credentials?.password as string;
        
        if (!email || !password) {
          return null;
        }

        try {
          // Realizando a consulta no banco de dados diretamente com `sql`
          const result = await sql`
            SELECT * FROM users WHERE email = ${email};
          `;

          const user = result.rows[0];

          if (!user) {
            return null; // Usuário não encontrado
          }

          // Comparando a senha armazenada no banco com a senha fornecida
          const passwordMatch = compareSync(password, user.password ?? '');
          
          if (!passwordMatch) {
            return null; // Senha incorreta
          }

          return user;
        } catch (error) {
          console.error('Erro na autenticação:', error);
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
