// FILE: layout.tsx
import { ReactNode } from "react";

export const metadata = {
  title: "Explore | Sport Matchmaking",
  description: "Explore upcoming sport matches",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}