import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  url: string;
  info: string;
};

export default function AnuncioCard({ title, description, url, info }: Props) {
  return (
    <a href={url} key={info}>
      <Alert className="flex items-center border-blue-500">
        <ExclamationTriangleIcon className="h-5 w-5" />
        <div>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </div>
      </Alert>
    </a>
  );
}
