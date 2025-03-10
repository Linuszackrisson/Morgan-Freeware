import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontbajs = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morgan Freeware",
  description: "A list of free software alternatives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontbajs.className}`}>
        <Header />
          {children}
        <Footer />  
      </body>
    </html>
  );
}