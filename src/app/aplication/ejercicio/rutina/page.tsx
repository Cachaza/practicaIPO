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

  const { data: rutinas } = api.rutina.getRoutine.useQuery({
    id: parseInt(id),
  });

  const rutina = rutinas ? rutinas[0] : null;

  if (!rutina) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-4">
      <div className="flex ">
        <Button variant="link" className="" onClick={() => router.back()}>
          <ResetIcon className="h-8 w-8" />
        </Button>
        <div className="text-2xl">{rutina?.title ?? ""}</div>
      </div>
      <div className="my-4 flex items-center justify-between">
        <span className="text-gray-500">12:47</span>
        <MoreVerticalIcon className="text-gray-400" />
      </div>
      <div className="mb-4">{rutina?.descripcion ?? "No description"}</div>
      <h2 className="mb-2 text-lg font-semibold">Example Exercise</h2>
      <div className="mb-4 rounded-lg bg-yellow-200 p-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Pinned Note</span>
          <LockIcon className="text-yellow-600" />
        </div>
      </div>
      <div className="mb-2 flex justify-between text-sm text-gray-500">
        <span>Set</span>
        <span>Previous</span>
        <span>kg</span>
        <span>Reps</span>
        <span />
      </div>
      <div className="mb-4 flex items-center justify-between rounded-lg bg-gray-100 p-2">
        <span className="font-semibold text-gray-700">1</span>
        <span className="text-gray-500">25 kg x 5</span>
        <span className="font-semibold">20</span>
        <span className="font-semibold">5</span>
        <CheckCircleIcon className="text-green-500" />
      </div>
      <div className="mb-4 flex items-center justify-between rounded-lg bg-gray-100 p-2">
        <span className="font-semibold text-gray-700">2</span>
        <span className="text-gray-500">—</span>
        <span className="font-semibold">20</span>
        <span className="font-semibold">5</span>
        <CheckCircleIcon className="text-green-500" />
      </div>
      <Button className="mb-4 text-gray-500" variant="ghost">
        + Add Set
      </Button>
      <Button className="mb-4 w-full bg-blue-500 text-white">
        Add Exercises
      </Button>
      <Button className="w-full" variant="destructive">
        Cancel Workout
      </Button>
    </div>
  );
}

function CheckCircleIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MoreVerticalIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

function PowerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" x2="12" y1="2" y2="12" />
    </svg>
  );
}
