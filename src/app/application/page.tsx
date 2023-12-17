import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type JSX, type SVGProps } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { getServerSession } from "next-auth/next";

import Unauth from "@/components/unauth";
import { authOptions } from "@/server/auth";
import Navbar from "@/components/navbar";

export default async function Component() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <Unauth />;
  }

  return (
    <div className="flex h-screen flex-col bg-gradient-to-b from-blue-500 via-blue-400 to-amber-600 p-4">
      <header className="">
        <Navbar route="MoveWell" atras="/" />
      </header>
      <main className="grid flex-1 gap-4">
        <Card className="relative flex items-center justify-center overflow-hidden border-2 border-white">
          {/* Background layer */}
          <div className="absolute inset-0 bg-opacity-75 bg-[url('/imagenForo.jpeg')] bg-cover bg-center blur-sm"></div>
          <CardContent className="z-10 flex w-56 items-center justify-center gap-4 rounded-lg border-2 border-black bg-white pt-5 text-black">
            <Link
              href={`/application/forum`}
              className="flex items-center gap-4"
            >
              <div>
                <UserIcon className="h-8 w-8" />
              </div>
              <div className="text-lg font-bold">Foro</div>
            </Link>
          </CardContent>
        </Card>

        <Card className="relative flex items-center justify-center overflow-hidden border-2 border-white">
          {/* Blurred background layer */}
          <div className="absolute inset-0 bg-[url('https://img.freepik.com/vector-gratis/conjunto-iconos-planos-fitness_1284-34012.jpg')] bg-cover bg-center blur-sm"></div>

          {/* Card Content */}
          <CardContent className="z-10 flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="z-10 flex w-56 items-center gap-3 rounded-lg border-2 border-black bg-white pb-4 pl-3 pt-5 text-black">
                  <ActivityIcon className="h-8 w-8" />
                  <Button variant="ghost" className="text-lg font-bold">
                    Empezar Rutina
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Empezar rutina</DialogTitle>
                  <DialogDescription>
                    Donde vas a realizar tu rutina?
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center">
                  <Link
                    href="/application/ejercicio?tipo=gym"
                    className="py-3 "
                  >
                    <Button variant="outline" className="w-20">
                      Gimnasio
                    </Button>
                  </Link>
                  <Link
                    href="/application/ejercicio?tipo=home"
                    className="py-3 "
                  >
                    <Button variant="outline" className="w-20">
                      Casa
                    </Button>
                  </Link>
                  <Link
                    href="/application/ejercicio?tipo=airelibre"
                    className="py-3 "
                  >
                    <Button variant="outline" className="w-20">
                      Aire libre
                    </Button>
                  </Link>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="destructive">
                      Cancelar
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        <Card className="relative flex items-center justify-center overflow-hidden border-2 border-white">
          {/* Background layer */}
          <div className="absolute inset-0 bg-opacity-75 bg-[url('https://img.freepik.com/vector-gratis/fondo-dia-mundial-salud-dibujado-mano_23-2149306514.jpg')] bg-cover bg-center blur-sm"></div>

          <CardContent className="z-10 flex w-56 items-center justify-center gap-4 rounded-lg border-2 border-black bg-white pt-5 text-black">
            <NutIcon className="h-8 w-8" />
            <Link className="text-lg font-semibold" href="#">
              Nutrición
            </Link>
          </CardContent>
        </Card>
      </main>
      <footer className="mt-4"></footer>
    </div>
  );
}

function ActivityIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function NutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 4V2" />
      <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" />
      <path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
