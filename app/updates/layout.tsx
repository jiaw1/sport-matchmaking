// FILE: layout.tsx
import { ReactNode } from "react";

export const metadata = {
  title: "Updates | Sport Matchmaking",
  description: "Updates of your matches",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}