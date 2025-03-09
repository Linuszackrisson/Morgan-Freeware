import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

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
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
