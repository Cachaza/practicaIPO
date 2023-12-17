import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-500 via-blue-400 to-amber-600 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          MoveWell
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-2xl text-white">
            Bienvenido a la aplicación de MoveWell
          </p>
          <img
            src="/logo.jpg"
            alt="Logo aplicacion"
            className="h-20 rounded-3xl"
          />

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && (
                <span>Sesión iniciada como {session.user?.name}</span>
              )}
            </p>
            {session && botonApplication()}
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="w-64 rounded-full bg-red-700/10 px-10 py-3 text-center font-semibold no-underline transition hover:bg-white/20"
              aria-label={session ? "Cerrar sesión" : "Iniciar session"}
            >
              {session ? "Cerrar sesión" : "Iniciar session"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
function botonApplication() {
  return (
    <div className="flex items-center justify-center text-white">
      <Link
        href="/application"
        className="w-64 rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        aria-label="Acceder a la aplicación"
      >
        Acceder a la aplicación
      </Link>
    </div>
  );
}
