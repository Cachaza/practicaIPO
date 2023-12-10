/* eslint-disable @next/next/no-img-element */
"use client";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type JSX, type SVGProps } from "react";

import AnuncioCard from "@/components/anuncioCard";
import InstagramPost from "@/components/instagramPost";

const anunciosJson = [
  {
    title: "Anuncio 1",
    description: "Descripcion 1",
    url: "https://www.google.com",
    info: "Info 1",
  },
  {
    title: "Anuncio 2",
    description: "Descripcion 2",
    url: "https://www.google.com",
    info: "Info 2",
  },
  {
    title: "Anuncio 3",
    description: "Descripcion 3",
    url: "https://www.google.com",
    info: "Info 3",
  },
];

const InstagramPostJson = [
  {
    userName: "Shad",
    userImage: "https://avatars.githubusercontent.com/u/11354539?v=4",
    postImage:
      "https://images.unsplash.com/photo-1627391427637-5c3e7f1f2e4b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHh6ZjJ3bG5jZ3x8ZW58MHx8fHwxNjMwMzU0MDY1&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    postDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, quibusdam, voluptate, quod voluptatibus fugiat aperiam voluptatum quos voluptas dolorum nesciunt quas. Quisquam quidem, quibusdam, voluptate, quod voluptatibus fugiat aperiam voluptatum quos voluptas dolorum nesciunt quas.",
    postComments: [
      {
        userName: "Shad",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        userName: "Shad",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        userName: "Shad",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    userName: "Shad",
    userImage: "https://avatars.githubusercontent.com/u/11354539?v=4",
    postImage:
      "https://images.unsplash.com/photo-1627391427637-5c3e7f1f2e4b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHh6ZjJ3bG5jZ3x8ZW58MHx8fHwxNjMwMzU0MDY1&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    postDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, quibusdam, voluptate, quod voluptatibus fugiat aperiam voluptatum quos voluptas dolorum nesciunt quas. Quisquam quidem, quibusdam, voluptate, quod voluptatibus fugiat aperiam voluptatum quos voluptas dolorum nesciunt quas.",
    postComments: [
      {
        userName: "Shad",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        userName: "Shad",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        userName: "Shad",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    userName: "Shad",
    userImage: "https://avatars.githubusercontent.com/u/11354539?v=4",
    postImage:
      "https://images.unsplash.com/photo-1627391427637-5c3e7f1f2e4b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHh6ZjJ3bG5jZ3x8ZW58MHx8fHwxNjMwMzU0MDY1&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    postDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, quibusdam, voluptate, quod voluptatibus fugiat aperiam voluptatum quos voluptas dolorum nesciunt quas. Quisquam quidem, quibusdam, voluptate, quod voluptatibus fugiat aperiam voluptatum quos voluptas dolorum nesciunt quas.",
    postComments: [
      {
        userName: "Shad",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        userName: "Shad",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        userName: "Shad",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    userName: "Shad",
    userImage: "https://avatars.githubusercontent.com/u/11354539?v=4",
    postImage:
      "https://images.unsplash.com/photo-1627391427637-5c3e7f1f2e4b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHh6ZjJ3bG5jZ3x8ZW58MHx8fHwxNjMwMzU0MDY1&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    postDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, quibusdam, voluptate",
  },
];

export default function Component() {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 p-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-3xl">Anuncios</AccordionTrigger>
            <AccordionContent>
              <ScrollArea className="h-[450px]">
                <div className="grid gap-4">
                  {anunciosJson.map((anuncio) => (
                    <AnuncioCard
                      title={anuncio.title}
                      description={anuncio.description}
                      url={anuncio.url}
                      info={anuncio.info}
                    />
                  ))}
                </div>
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {InstagramPostJson.map((post) => (
          <InstagramPost
            userName={post.userName}
            userImage={post.userImage}
            postImage={post.postImage}
            postDescription={post.postDescription}
            postComments={post.postComments ?? null}
          />
        ))}
      </div>
    </div>
  );
}
