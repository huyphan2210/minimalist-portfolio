"use client";

import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.scss";

import logo from "./../../../icons/logo.svg";
import MobileNavHandler from "./mobile-nav-handler/mobile-nav-handler";

import { IInternalNavigation } from "@/common/navigationList";
import { usePathname } from "next/navigation";

export interface ILayoutHeader {
  navigationList: IInternalNavigation[];
}

const LayoutHeader: FC<ILayoutHeader> = ({ navigationList }) => {
  const pathName = usePathname();
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
