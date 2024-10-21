import { FC, ReactNode } from "react";
import LogInForm from "./components/LogInForm/LogInForm";
import Image from "next/image";

import authImage from "@/assets/images/human_image.png";

import styles from "./styles.module.scss";

interface IAuth {
  children: ReactNode;
}

const Auth: FC<IAuth> = (props) => {
  return (
    <main className={styles.main}>
      {props.children}
      <Image className={styles.image} src={authImage} alt="human image" />
    </main>
  );
};

export default Auth;
