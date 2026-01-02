import { FC } from "react";
import styles from "./footer.module.scss";

import {
  IInternalNavigation,
  IProfileNavigation,
} from "@/common/navigationList";

import Link from "next/link";
import Image from "next/image";

import logoWhite from "../../../icons/logo-white.svg";

export interface ILayoutFooter {
  internalNavigationList: IInternalNavigation[];
  profileNavigationList: IProfileNavigation[];
}

const LayoutFooter: FC<ILayoutFooter> = ({
  internalNavigationList,
  profileNavigationList,
}) => {
  return (
    <footer className={styles.footer}>
      <Link href={"/"} className={styles["footer__home-link"]}>
        <Image
          className={styles["footer__home-link__img"]}
          src={logoWhite}
          loading="lazy"
          alt="Logo"
        />
      </Link>
      <nav className={styles.footer__nav}>
        <ul className={styles["footer__nav__internal-list"]}>
          {internalNavigationList.map((navigation, index) => (
            <li
              className={`${styles["footer__nav__internal-list__item"]}`}
              key={index}
            >
              <Link href={navigation.url}>{navigation.pageTitle}</Link>
            </li>
          ))}
        </ul>
        <ul className={styles["footer__nav__external-list"]}>
          {profileNavigationList.map((navigation, index) => (
            <li
              className={`${styles["footer__nav__external-list__item"]}`}
              key={index}
            >
              <Link target="_blank" href={navigation.url}>
                <Image
                  src={navigation.lightIcon}
                  loading="lazy"
                  alt="Profile"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default LayoutFooter;
