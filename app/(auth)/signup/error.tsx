'use client';

import ErrorPage from './_components/error-page';

export default function RegisterError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPage errorMessage={error.message} reset={reset} />;
}