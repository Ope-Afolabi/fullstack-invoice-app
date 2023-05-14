"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./provider";
import { SessionProvider } from "next-auth/react";
const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Invoice App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          <Providers> {children}</Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
