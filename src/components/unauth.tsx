/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hfeNtB8oS68
 */
import Link from "next/link";
import { type JSX, type SVGProps } from "react";

export default function Unauth() {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
        <div className="flex flex-col items-center justify-center space-y-6">
          <LockIcon className="h-16 w-16 text-gray-500" />
          <h1 className="text-3xl font-bold text-gray-900">Acceso denegado</h1>
          <p className="text-center text-gray-600">
            Por favor, inicia sesión para continuar.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50"
            href="/"
          >
            Volver al inicio
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50"
            href="/api/auth/signin"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </section>
  );
}

function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
