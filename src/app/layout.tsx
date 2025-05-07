import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Suspense } from "react";


const roboto = Roboto({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Trang web trường đại học ở Phần Lan (Finland universities website)",
  description: "Thông tin về các trường ở Phần Lan (Finland universities information)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${roboto.className} flex flex-col min-h-screen bg-black`}
      >
        <Header />
        <Suspense><main className="flex-grow">{children}</main></Suspense>
        <Footer />
      </body>
    </html>
  );

}
