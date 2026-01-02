"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import menu from "./../../../../icons/menu.svg";
import close from "./../../../../icons/close.svg";

import styles from "./mobile-nav-handler.module.scss";
import headerStyles from "../header.module.scss";
import { usePathname } from "next/navigation";

const MobileNavHandler: FC = () => {
  const pathName = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navigationList, setNavigationList] = useState<Element>();

  const openNavigationList = () => {
    setIsNavOpen(true);
    navigationList?.classList.add(headerStyles.open);
  };

  const closeNavigationList = () => {
    setIsNavOpen(false);
    navigationList?.classList.remove(headerStyles.open);
  };

  useEffect(() => {
    setNavigationList(
      document.getElementsByClassName(headerStyles.header__nav__list)[0]
    );
  }, []);

  useEffect(closeNavigationList, [pathName]);

  return (
    <>
      {!isNavOpen && (
        <button
          type="button"
          className={styles["client-nav_btn"]}
          onClick={openNavigationList}
        >
          <Image src={menu} loading="lazy" alt="Logo" />
        </button>
      )}
      {isNavOpen && (
        <button
          type="button"
          className={`${styles["client-nav_btn"]}`}
          onClick={closeNavigationList}
        >
          <Image src={close} loading="lazy" alt="Logo" />
        </button>
      )}
    </>
  );
};

export default MobileNavHandler;
