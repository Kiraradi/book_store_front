import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/modules/Header/Header";
import Layout from "@/modules/Layout/Layout";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Book Store",
  description: "book store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
