import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
// import ReduxProvider from "../../provider/ReduxProvider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryProvider from "../../provider/QueryProvide";


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
        className={`${roboto.className} min-h-screen bg-black`}
      >
        <Header />
        <QueryProvider><main >{children}</main></QueryProvider>
      </body>
    </html>
  );

}
