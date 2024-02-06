import type { Metadata } from "next";
import { Nunito } from "next/font/google"
import  "./globals.css"

import Navbar from "./components/Navbar";


const font = Nunito({
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Airbnb ",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={font.className}>{children}</body>
    </html>
  );
}