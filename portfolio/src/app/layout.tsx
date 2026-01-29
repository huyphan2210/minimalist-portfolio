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
import LayoutService from "@/services/layout.service";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutData = await LayoutService.getLayoutData();
  return (
    <html
      lang="en"
      className={`${ibarraRealNova.variable} ${publicSans.variable}`}
    >
      <body>
        <LayoutHeader navigationList={internalNavigationList}></LayoutHeader>
        <LayoutMain layoutData={layoutData}>{children}</LayoutMain>
        <LayoutFooter
          internalNavigationList={internalNavigationList}
          profileNavigationList={profileNavigationList}
        ></LayoutFooter>
        <LoadingOverlay isLoading={true} />
      </body>
    </html>
  );
}
