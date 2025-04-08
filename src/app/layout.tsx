import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";

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
        className={roboto.className}
      >
        <Header />
        <main className="bg-black">{children}</main>
      </body>
    </html>
  );

}
