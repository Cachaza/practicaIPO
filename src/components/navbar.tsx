import Link from "next/link";
import { ResetIcon } from "@radix-ui/react-icons";

interface NavbarProps {
  route: string;
  atras: string;
}

export default function Navbar({ route, atras }: NavbarProps) {
  return (
    <div className="flex h-16 items-center justify-between bg-blue-500">
      <Link href={atras} about="Volver atras">
        <ResetIcon className="h-8 w-8" />
      </Link>
      <h1 className="text-2xl font-semibold">{route}</h1>
      <Link href="/aplication" about="Volver al menu principal">
        <img
          src="https://cdn.discordapp.com/attachments/1060294332646690888/1184545250065256450/4d7d579b-632b-4cec-b551-94995f9c82e3.jpg?ex=658c5cbb&is=6579e7bb&hm=34911917f2d973730dc673527d0284cec3941ab811167607686598c0dee5c775&"
          alt="Logo de la app"
          className="w-10 rounded-xl pr-2"
        />
      </Link>
    </div>
  );
}
