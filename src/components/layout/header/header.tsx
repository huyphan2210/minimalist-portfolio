import { FC, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.scss";

import logo from "./../../../icons/logo.svg";
import menu from "./../../../icons/menu.svg";
import close from "./../../../icons/close.svg";

const LayoutHeader: FC = () => {
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
      <nav className={styles["header__nav"]}>
        <button type="button" className={styles.header__nav_btn}>
          <Image src={menu} loading="lazy" alt="Logo" />
        </button>
        <button
          type="button"
          className={`${styles.header__nav_btn} ${styles["header__nav_btn--non-display"]}`}
        >
          <Image src={close} loading="lazy" alt="Logo" />
        </button>
      </nav>
    </header>
  );
};

export default LayoutHeader;
