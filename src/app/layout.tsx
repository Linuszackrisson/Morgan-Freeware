import type { Metadata } from "next";
import { Raleway, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: "Morgan Freeman",
  description: "A list of free software alternatives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ${orbitron.variable}`}>
        <Header />
          {children}
        <Footer />  
      </body>
    </html>
  );
}