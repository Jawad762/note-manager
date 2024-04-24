import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "./components/Header";
import dynamic from 'next/dynamic';
dynamic(
  () => import("./StoreProvider"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note Manager",
  description: "This is my internship project presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.className} h-full w-full flex flex-col`}>
        <StoreProvider>
          <Header/>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
