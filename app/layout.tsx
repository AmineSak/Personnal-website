import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

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
    <html lang="en" data-theme="light">
      <body>
        <div className="main">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
