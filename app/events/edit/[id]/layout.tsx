// FILE: layout.tsx
import { ReactNode } from "react";
import { matchServiceURL } from "@/lib/definitions";


export async function generateMetadata({ params }: { params: { id: string } }) {

  const event = await fetch(`${matchServiceURL}/matches/${params.id}`).then((res) =>
    res.json()
  );

  return {
    title: `${event.sport} - Edit | Sport Matchmaking`,
    description: `Edit details for the match ${event.sport}.`,
  };
}
export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}