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
import { Button } from "./ui/button";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Countdown from "./coundown";

export default function Socorro() {
  return (
    <div className="fixed bottom-2 right-2">
      <Dialog>
        <DialogTrigger asChild>
          <div className="outline-5 flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 outline-black">
            <ExclamationTriangleIcon className="h-8 w-8 font-bold text-amber-400" />
          </div>
        </DialogTrigger>
        <DialogContent className="w-80 rounded-lg">
          <DialogHeader>
            <DialogTitle>Funcion de socorro</DialogTitle>
            <DialogDescription>
              Se ha activado la funcion de socorro, si no se cancela en 5
              segundos, se notificara a las autoridades
            </DialogDescription>
            <div className="flex flex-col items-center">
              <Countdown />
            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="destructive">
                Cancelar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
