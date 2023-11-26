import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Zonify Spaces",
  description: "One Stop Place for all the Mess",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" " lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="">
        {" "}
        <Providers>
          <Toaster richColors position="top-center" /> {children}
        </Providers>
      </body>
    </html>
  );
}
