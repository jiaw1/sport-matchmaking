"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
  session: Session | null;
}

const Providers: React.FC<IProvidersProps> = ({ session, children }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
