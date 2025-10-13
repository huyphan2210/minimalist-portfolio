import type { Metadata } from "next";
import { Ibarra_Real_Nova } from "next/font/google";
import "../styles/default.scss";

const ibarraRealNova = Ibarra_Real_Nova({
  variable: "--font-ibarra-real-nova",
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
    <html lang="en" className={`${ibarraRealNova.variable}`}>
      <body>{children}</body>
    </html>
  );
}
