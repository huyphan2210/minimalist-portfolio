"use client";

import { FC } from "react";
import Link from "next/link";

import styles from "./main.module.scss";
import { ILayout } from "@/interfaces/api/layout";
import { usePathname } from "next/navigation";

interface IContactSection {
  layoutData: Required<ILayout>;
}

const ContactSection: FC<IContactSection> = ({ layoutData }) => {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/contact" && (
        <section className={styles.main__contact}>
          <h2 className={styles.main__contact__heading}>
            {layoutData.contactMeHeading}
          </h2>
          <div className={styles["main__contact__distance-bar"]}></div>
          <Link
            className={styles.main__contact__cta}
            href={layoutData.contactMeURL}
            title="Call to Action - Contact Me"
          >
            {layoutData.contactMeButtonContent}
          </Link>
        </section>
      )}
    </>
  );
};

export default ContactSection;
