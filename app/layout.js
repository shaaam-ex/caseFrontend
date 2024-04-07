import { Inter } from "next/font/google";
import Header from "./layouts/header/header";
import Head from "next/head";
import Footer from "./layouts/footer/page";

const inter = Inter({ subsets: ["latin"] });

import './customGlobals.css';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
