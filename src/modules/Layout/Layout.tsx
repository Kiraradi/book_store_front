import { FC, ReactNode } from "react";
import Header from "../Header/Header";

import styles from "./styles.module.scss";
import Footer from "../Footer/Footer";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = (props) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
