'use server';

import { signOut } from '@/auth';

export default async function signout() {
  try {
    await signOut({ redirectTo: "/signin" });
  } catch (e) {
    throw e;
  }
}