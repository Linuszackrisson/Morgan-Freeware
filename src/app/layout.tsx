import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Raleway({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
