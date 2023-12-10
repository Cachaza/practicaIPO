"use client";
import React, { useEffect, useState } from "react";
import { CardContent, Card } from "@/components/ui/card";

export default function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Check if count reaches 0 and perform any action if needed
    if (count === 0) {
      // Do something when countdown reaches 0
    }
  }, [count]);

  return (
    <Card className="mx-auto mt-10 max-w-xs space-y-4 rounded-xl bg-white p-4 text-center shadow-md">
      <CardContent className="p-6">
        {count > 0 && <h2 className="text-3xl font-semibold">Cuenta atras</h2>}
        <div className="mb-4 text-6xl font-bold">
          {count > 0 ? <p>{count}</p> : <p></p>}
        </div>
        {count <= 0 && (
          <div className="text-2xl font-semibold">Socorro enviado</div>
        )}
      </CardContent>
    </Card>
  );
}
