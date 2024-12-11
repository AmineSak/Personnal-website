import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Amine Sakouhi",
  description: "Welcome to my personnal page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className="flex-col justify-center items-center">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
