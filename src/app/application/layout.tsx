import { getServerSession } from "next-auth/next";

import Unauth from "@/components/unauth";
import { authOptions } from "@/server/auth";
import Socorro from "@/components/socorro";

export default async function AplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <Unauth />;
  }
  return (
    <div>
      {children}
      <Socorro />
    </div>
  );
}
