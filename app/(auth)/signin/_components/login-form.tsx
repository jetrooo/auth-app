/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { SiGithub } from '@icons-pack/react-simple-icons';
import login from "../_actions/signin";
import githubLogin from "../_actions/github-login";

export default function SignInForm() {

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center w-1/3 bg-primary text-primary-foreground p-8">
        <div className="mb-8">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-2">Welcome back</h1>
        <p className="text-xl">Sign in to access your EnterpriseApp account.</p>
      </div>
      <div className="flex items-center justify-center w-2/3 p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={login} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">Sign In</Button>
            </form>
            <form action={githubLogin}>
              <Button
                size={'lg'}
                type="submit"
                className="w-full mt-2 flex items-center gap-3"
              >
              <SiGithub className="w-4 h-4" />
                Login with GitHub
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2">
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot your password?
            </Link>
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}