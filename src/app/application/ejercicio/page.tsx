"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ResetIcon } from "@radix-ui/react-icons";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { api } from "@/trpc/react";

export default function Component() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo");

  if (tipo !== "gym" && tipo !== "home" && tipo !== "airelibre") {
    router.push("/aplication");
    return <div>Error</div>;
  }

  const rutinasJson = api.rutina.getLast4.useQuery({ type: tipo ?? "" }).data;
  const createRutinaApi = api.rutina.create.useMutation();
  const { refetch } = api.rutina.getLast4.useQuery({ type: tipo ?? "" });

  const [rutinaName, setRutinaName] = useState<string>("");
  const [rutinaDescription, setRutinaDescription] = useState<string>("");

  async function createRutina() {
    console.log("creando rutina");
    if (rutinaName === "" || rutinaDescription === "") {
      console.log("no se puede crear rutina");
      return;
    }

    const newRutina = {
      title: rutinaName ?? "",
      descripcion: rutinaDescription ?? "",
      type: tipo ?? "",
    };

    await createRutinaApi.mutateAsync(newRutina);
    void refetch();
  }

  console.log(rutinasJson);

  return (
    <div className="">
      <Card className="mb-6">
        <CardHeader className="flex flex-row">
          <Button variant="link" className="">
            <Link href="/application">
              <ResetIcon className="h-8 w-8" />
            </Link>
          </Button>
          <CardTitle className="pl-5">{titleName(tipo ?? "")}</CardTitle>
        </CardHeader>
        <CardContent className="flex h-full flex-col p-4 text-3xl">
          {rutinasJson?.map((rutina) => (
            <div key={rutina.title}>
              <Link href={`/application/ejercicio/rutina?id=${rutina.id}`}>
                <Button variant="outline" className="mb-4 w-full">
                  {rutina.title ?? "Error"}
                </Button>
              </Link>
            </div>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">Crear rutina</Button>
            </DialogTrigger>
            <DialogContent className="rounded-xl">
              <DialogHeader>
                <DialogTitle>Crear rutina</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="flex flex-col items-center space-x-2">
                <div className="flex flex-col gap-4">
                  <div>
                    <Label htmlFor="link" className="sr-only">
                      Nombre de la rutina
                    </Label>
                    <Input
                      id="name"
                      placeholder="Nombre"
                      value={rutinaName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setRutinaName(e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="link" className="sr-only">
                      Descripcion
                    </Label>
                    <Input
                      id="link"
                      placeholder="Descripcion"
                      value={rutinaDescription}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setRutinaDescription(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <DialogFooter className="flex flex-col items-center">
                <DialogClose asChild>
                  <div className="pl-2">
                    <div className="pb-5">
                      <Button
                        type="submit"
                        className="w-80 p-3"
                        onClick={() => createRutina()}
                      >
                        <span className="sr-only">Copy</span>
                        Crear rutina
                      </Button>
                    </div>
                    <div>
                      <Button
                        type="button"
                        variant="destructive"
                        className="w-80"
                      >
                        Cerrar
                      </Button>
                    </div>
                  </div>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}

function titleName(tipo: string) {
  if (tipo === "gym") {
    return "Gimnasio";
  } else if (tipo === "home") {
    return "Casa";
  } else if (tipo === "airelibre") {
    return "Aire libre";
  } else {
    return "Error";
  }
}
