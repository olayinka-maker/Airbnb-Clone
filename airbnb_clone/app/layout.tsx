import type { Metadata } from "next";
import { Nunito } from "next/font/google"
import  "./globals.css"

import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/modals/Modal";


const font = Nunito({
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Airbnb ",
  description: "Airbnb Clne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Modal isOpen/>
      <Navbar/>
        {children}
        </body>
    </html>
  );
}
