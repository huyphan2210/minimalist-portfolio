import type { Metadata } from "next";
import { Ibarra_Real_Nova, Public_Sans } from "next/font/google";
import "../styles/default.scss";

const ibarraRealNova = Ibarra_Real_Nova({
  variable: "--font-ibarra-real-nova",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Huy Phan's Portfolio",
  description: "An Introduction of Huy Phan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibarraRealNova.variable} ${publicSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
