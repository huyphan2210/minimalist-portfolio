import { FC, ReactNode } from "react";
import styles from "./main.module.scss";

interface ILayoutMain {
  children: ReactNode;
}

const LayoutMain: FC<ILayoutMain> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default LayoutMain;
