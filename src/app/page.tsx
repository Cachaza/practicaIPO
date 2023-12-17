import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
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
                <span>Sessión iniciada como {session.user?.name}</span>
              )}
            </p>
            {session && botonApplication()}
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Cerrar session" : "Iniciar session"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
function botonApplication() {
  return (
    <div className="flex items-center justify-center text-black">
      <Link href="/application">
        <Button variant="default">Acceder a la aplicación</Button>
      </Link>
    </div>
  );
}
