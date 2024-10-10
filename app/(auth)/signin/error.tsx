'use client';

import { Button } from "@/components/ui/button"
import { AlertCircle, RotateCcw, Home } from "lucide-react"
import Link from "next/link"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  const errorMessage = error.message;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <AlertCircle className="h-16 w-16 text-destructive" aria-hidden="true" />
          <h1 className="text-4xl font-bold text-center">Oops! Something went wrong</h1>
        </div>
        <div className="bg-card rounded-lg shadow-lg p-6 space-y-6">
          <p className="text-center text-muted-foreground" role="alert">
            {errorMessage}
          </p>
          <div className="flex justify-center space-x-4">
            <Button onClick={reset} variant="default">
              <RotateCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}