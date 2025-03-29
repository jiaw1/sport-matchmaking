// FILE: layout.tsx
import { ReactNode } from "react";

export const metadata = {
  title: "Host | Sport Matchmaking",
  description: "Host a new match!",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}