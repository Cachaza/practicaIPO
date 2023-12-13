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
    title: "Evento de calistenia",
    description: "Descubre el mundo de la calistenia",
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
      "https://hips.hearstapps.com/hmg-prod/images/zaragoza4-1606575915.jpg?resize=980:*",
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
      "https://files.oaiusercontent.com/file-O31PLOTUsSOm8p9CD3hr6OcC?se=2023-12-13T17%3A48%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D074bbf41-8f28-4fb2-b315-6808a9b9df90.webp&sig=v5B50w/mxNBD5w30T%2BdBGaumf/Wvuwpyp8xWZg2GYNk%3D",
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
      "https://cdn.resfu.com/media/img_news/partido-de-futbol-para-discapacitados-en-sierra-leona--afp.jpg?size=1000x&lossy=1",
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
      "https://files.oaiusercontent.com/file-a1hx7BJXWsJZlViOPKtxwjB4?se=2023-12-13T18%3A08%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D63c4f7fe-779a-4881-986e-87fed8646e38.webp&sig=ezJ2t2nnXDDwYnwodYcu/QpzQX5KPhMRbSKh18%2B8lxU%3D",
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
              <ScrollArea className="">
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
