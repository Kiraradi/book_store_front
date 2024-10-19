import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import HeaderForm from "./components/HeaderForm/HeaderForm";
import Link from "next/link";
import HeaderButtonBar from "./components/HeaderButtonBar/HeaderButtonBar";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>

      <Link href={"/"}>
        <span className={styles.text}>Catalog</span>
      </Link>
      <HeaderForm />
      <HeaderButtonBar/>
    </header>
  );
};

export default Header;
