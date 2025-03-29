import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import AppFrame from "./AppFrame";
import Providers from "./components/providers/Providers";
import { getSession } from "next-auth/react";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Sport Matchmaking",
  description: "Easily find and join sport matches in Aalto!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers session={session}>
          <AppFrame>{children}</AppFrame>
        </Providers>
      </body>
    </html>
  );
}
