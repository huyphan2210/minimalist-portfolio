import { FC, ReactNode } from "react";
import styles from "./main.module.scss";
import { ILayout } from "@/interfaces/api/layout";

import ContactSection from "./ContactSection.client";

interface ILayoutMain {
  children: ReactNode;
  layoutData: Required<ILayout>;
}

const LayoutMain: FC<ILayoutMain> = async ({ children, layoutData }) => {
  return (
    <main className={styles.main}>
      {children}
      <ContactSection layoutData={layoutData} />
    </main>
  );
};

export default LayoutMain;
