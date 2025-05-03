import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
const inter = Inter({ subsets: ["latin"] });
import '@fontsource/inter';

export const metadata: Metadata = {
  title: "OpenWrt",
  description: "MuCI - OpenWrt Configuration Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body >
        <CssVarsProvider disableTransitionOnChange defaultMode="dark">
          <CssBaseline />
          <Header />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}
