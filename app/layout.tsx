import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/header';
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenWrt",
  description: "Open Source Crypto Exchange Platform with Zero Transaction Fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Header />
        {children}
        </CssVarsProvider>
        </body>
    </html>
  );
}