import type { Metadata } from "next";
import { Ibarra_Real_Nova, Public_Sans } from "next/font/google";
import "../styles/default.scss";
import LayoutHeader from "@/components/layout/header/header";
import {
  internalNavigationList,
  profileNavigationList,
} from "@/common/navigationList";
import LayoutFooter from "@/components/layout/footer/footer";
import LayoutMain from "@/components/layout/main/main";

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
      <body>
        <LayoutHeader navigationList={internalNavigationList}></LayoutHeader>
        <LayoutMain>{children}</LayoutMain>
        <LayoutFooter
          internalNavigationList={internalNavigationList}
          profileNavigationList={profileNavigationList}
        ></LayoutFooter>
      </body>
    </html>
  );
}
