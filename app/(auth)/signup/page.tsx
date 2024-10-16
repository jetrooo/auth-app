import { auth } from '@/auth';
import SignUpForm from './_components/signup-form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect('/dashboard');

  return <SignUpForm />;
}