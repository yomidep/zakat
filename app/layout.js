import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "ZakatChain",
  description: " Where blockchain meets compassion  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <ToastContainer />
      </body>
    </html>
  );
}
