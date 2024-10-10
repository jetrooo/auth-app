

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import register from '../_actions/signup';

export default function SignUpForm() {

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center w-1/3 bg-primary text-primary-foreground p-8">
        <div className="mb-8">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-2">Welcome to EnterpriseApp</h1>
        <p className="text-xl">Secure, scalable, and reliable enterprise solutions.</p>
      </div>
      <div className="flex items-center justify-center w-2/3 p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Enter your details to register</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={register} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">Register</Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/signin" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}