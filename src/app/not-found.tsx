// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">404 - Page Not Found</h1>
      <p>Sorry, we couldn&apos;t find what you&apos;re looking for.</p>
      <Link href="/" className="text-blue-500 underline">Go back to homepage</Link>
    </div>
  );
}
