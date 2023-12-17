"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import { date } from "drizzle-orm/mysql-core";
import { time } from "console";
const anunciosJson = [
  {
    title: "Evento de calistenia",
    description: "Descubre el mundo de la calistenia",
    url: "/application/forum/anuncios?id=1",
    info: " Este evento es perfecto tanto para principiantes como para atletas experimentados. Nuestros entrenadores profesionales estarán disponibles para guiar, enseñar y motivar a cada participante. Además, habrá una sesión especial de preguntas y respuestas donde podrás resolver todas tus dudas sobre la calistenia. ¡No te pierdas esta oportunidad de fortalecer tu cuerpo y mente en un ambiente divertido y desafiante!",
    id: 1,
    date: "2023-23-12",
    time: "10:00",
    lugar: "Parque central",
    plazas: 20,
  },
  {
    title: "Encuentro yoga",
    description: "Descubre el mundo del yoga, este sabado en el parque central",
    url: "/application/forum/anuncios?id=2",
    info: " Nuestro encuentro de yoga es la ocasión ideal para alejarte del estrés diario y sumergirte en prácticas de bienestar. Contaremos con instructores experimentados que te guiarán a través de diferentes estilos de yoga, adaptándose a tus necesidades y nivel de experiencia. Además, habrá una sesión de meditación guiada para completar tu experiencia de relajación y conexión interior. Trae tu esterilla y únete a nuestra comunidad de yoga para una jornada de paz y armonía.",
    id: 2,
    date: "2023-29-12",
    time: "12:00",
    lugar: "Parque central",
    plazas: 35,
  },
  {
    title: "Jornada de futbol",
    description:
      "Ven a jugar futbol con nosotros, este domingo en el parque sois todos bienvenidos",
    url: "/application/forum/anuncios?id=3",
    info: " Nuestra Jornada de Fútbol es la ocasión perfecta para los aficionados y jugadores de todos los niveles para disfrutar de un día lleno de acción y diversión. Organizaremos partidos amistosos en los que podrás mostrar tus habilidades y, al mismo tiempo, aprender de otros jugadores. Además de los partidos, habrá actividades para mejorar tus técnicas de juego, sesiones de calentamiento y estiramiento dirigidas por entrenadores profesionales, y un espacio para relajarse y socializar con otros amantes del fútbol. No importa si eres un jugador experimentado o alguien que simplemente ama el juego, ¡ven y únete a nosotros para un domingo de deporte y camaradería en el Parque Central!",
    id: 3,
    date: "2023-29-12",
    time: "16:00",
    lugar: "Parque central",
    plazas: 14,
  },
];

export default function Component() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  if (!id) {
    router.back();
    return <div>Error</div>;
  }
  const anuncio = anunciosJson.find((anuncio) => anuncio.id === Number(id));

  if (!anuncio) {
    return (
      <div>
        <Navbar route="Anuncios" atras="/application/forum" />
        <div className="flex flex-col justify-center bg-gray-100 py-6 sm:py-12">
          <div className="relative py-3 sm:mx-auto sm:max-w-xl">
            <Card className="mx-auto rounded-lg bg-white p-4 shadow-md sm:p-6 lg:p-8">
              <CardHeader>
                <CardTitle>Error</CardTitle>
                <CardDescription>El anuncio no existe</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar route="Anuncios" atras="/application/forum" />
      <div className="flex flex-col justify-center bg-gray-100 py-6 sm:py-12">
        <div className="relative py-3 sm:mx-auto sm:max-w-xl">
          <Card className="mx-auto rounded-lg bg-white p-4 shadow-md sm:p-6 lg:p-8">
            <CardHeader>
              <CardTitle>{anuncio?.title}</CardTitle>
              <CardDescription>{anuncio?.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-xl font-bold">¿Cuando?</p>
                <p className="text-md text-black">
                  {"Se llevara a cabo el dia " +
                    anuncio?.date +
                    " a las " +
                    anuncio?.time}
                </p>
                <p className="text-xl font-bold">Informacion adicional</p>
                <p className="text-justify">{anuncio?.info}</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold">¿Donde?</h2>
                <p>Check the location on Google Maps.</p>
                <div className="">{anuncio?.lugar}</div>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold">Plazas</h2>
                <p>Quedan {anuncio?.plazas} plazas</p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="mt-4 flex flex-col items-center gap-3">
                <p className="text-center">
                  Si estas interesado en participar en este evento, inscribete
                </p>
                <Button
                  variant="default"
                  className="text-bold w-full text-xl text-white"
                >
                  Inscribirse
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
