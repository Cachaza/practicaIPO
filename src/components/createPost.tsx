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
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { api } from "@/trpc/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CrearPost() {
  const router = useRouter();
  const { refetch } = api.post.getPosts.useQuery();

  const createPostApi = api.post.create.useMutation({
    onSuccess: () => {
      void refetch();
      router.refresh();
    },
  });
  const [photoLink, setPhotoLink] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  async function createPost() {
    if (photoLink === "" || title === "") {
      return;
    }

    const newPost = {
      photoLink: photoLink,
      title: title,
    };

    await createPostApi.mutateAsync(newPost);

    setPhotoLink("");
    setTitle("");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Crear post</Button>
      </DialogTrigger>
      <DialogContent className="w-80 rounded-lg">
        <DialogHeader>
          <DialogTitle>Crear Post</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <form className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="photo-link">Direccion de la foto</Label>
              <Input
                id="photo-link"
                placeholder="Link de la foto"
                type="text"
                value={photoLink}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhotoLink(e.target.value)
                }
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="title">Titulo</Label>
              <Input
                id="title"
                placeholder="Titulo para el post"
                type="text"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
            </div>
          </form>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <div>
              <div className="p-2">
                <Button className="w-full" onClick={createPost}>
                  Crear Post
                </Button>
              </div>
              <div className="p-2">
                <Button className="w-full" type="button" variant="destructive">
                  Cerrar
                </Button>
              </div>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
