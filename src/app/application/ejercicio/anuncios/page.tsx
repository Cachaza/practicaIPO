"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ResetIcon } from "@radix-ui/react-icons";
import { type JSX, type SVGProps } from "react";
import { api } from "@/trpc/react";

export default function Component() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  if (!id) {
    router.back();
    return <div>Error</div>;
  }
}
