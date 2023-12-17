/* eslint-disable @next/next/no-img-element */
"use client";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import AnuncioCard from "@/components/anuncioCard";
import InstagramPost from "@/components/instagramPost";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import CrearPost from "@/components/createPost";
import { api } from "@/trpc/react";
import InstagramPostSkeleton from "@/components/instagramPostSkeleton";

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
      "https://media.discordapp.net/attachments/1060294332646690888/1185736768604094484/DALLE_2023-12-17_01.14.29_-_A_healthy_meal_designed_for_weight_loss_beautifully_presented_on_a_white_plate._The_meal_includes_a_grilled_chicken_breast_a_side_of_steamed_broccol.png?ex=6590b26b&is=657e3d6b&hm=097777b478e0c900c5f4bd0815b0d0e581743db5ec4a9180b6a8fa9af2131cf6&=&format=webp&quality=lossless&width=678&height=678",
    postDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, quibusdam, voluptate",
  },
];

export default function Component() {
  const getPosts = api.post.getPosts.useQuery();

  return (
    <div className="">
      <Navbar route="Foro" atras="/application" />
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
        <div className="flex justify-center">
          <CrearPost />
        </div>
        {getPosts.data?.map((post) => (
          <InstagramPost
            userName={post.createdByName}
            userImage={post.userPhotoLink}
            postImage={post.photoLink}
            postDescription={post.title}
            postComments={null}
          />
        ))}
        {getPosts.isLoading && (
          <div>
            <InstagramPostSkeleton />
            <InstagramPostSkeleton />
            <InstagramPostSkeleton />
            <InstagramPostSkeleton />
            <InstagramPostSkeleton />
            <InstagramPostSkeleton />
          </div>
        )}
      </div>
    </div>
  );
}
