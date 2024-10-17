import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import CustomButton from "@/shared/components/CustomButton/CustomButton";
import HeaderForm from "./components/HeaderForm/HeaderForm";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={logo} alt="logo" />
      <p className={styles.text}>Catalog</p>
      <HeaderForm />
      <CustomButton type="classic" disable={false} link="">
        Log In/ Sing Up
      </CustomButton>
    </header>
  );
};

export default Header;
