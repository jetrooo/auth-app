import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts";
import { sql } from '@vercel/postgres';
import type { NextAuthConfig } from "next-auth";

export default {
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;