import SignInForm from "./_components/login-form";
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function SignInPage() {

  const session = await auth();
  if (session) redirect('/dashboard');

  return <SignInForm/>
}