import { FC, ReactNode } from "react";
import styles from "./main.module.scss";
import Link from "next/link";
import { Layout_Plain } from "@/interfaces/api/layout";

interface ILayoutMain {
  children: ReactNode;
  layoutData: Layout_Plain;
}

const LayoutMain: FC<ILayoutMain> = ({ children, layoutData }) => {
  return (
    <main className={styles.main}>
      {children}
      {layoutData.contactMeURL &&
        layoutData.contactMeHeading &&
        layoutData.contactMeButtonContent && (
          <section className={styles.main__contact}>
            <h2 className={styles.main__contact__heading}>
              {layoutData.contactMeHeading}
            </h2>
            <Link
              className={styles.main__contact__cta}
              href={layoutData.contactMeURL}
              title="Call to Action - Contact Me"
            >
              {layoutData.contactMeButtonContent}
            </Link>
          </section>
        )}
    </main>
  );
};

export default LayoutMain;
