import { FC } from "react";
import { headers } from "next/headers";

import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.scss";

import logo from "./../../../icons/logo.svg";
import MobileNavHandler from "./mobile-nav-handler/mobile-nav-handler";

import { ICommonNavigationList } from "@/common/navigationList";
import { REQUEST_HEADERS } from "@/middleware";

export interface ILayoutHeader {
  navigationList: ICommonNavigationList[];
}

const LayoutHeader: FC<ILayoutHeader> = async ({ navigationList }) => {
  const headerInfo = await headers();
  const pathName = headerInfo.get(REQUEST_HEADERS.pathName);
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles["header__home-link"]}>
        <Image
          className={styles["header__home-link__img"]}
          src={logo}
          loading="lazy"
          alt="Logo"
        />
      </Link>
      <nav className={styles.header__nav}>
        <MobileNavHandler />
        <ul className={styles.header__nav__list}>
          {navigationList.map((navigation, index) => (
            <li
              className={`${styles.header__nav__list__item} ${
                pathName === navigation.url
                  ? styles["header__nav__list__item--active"]
                  : ""
              }`}
              key={index}
            >
              <Link href={navigation.url}>{navigation.pageTitle}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default LayoutHeader;
