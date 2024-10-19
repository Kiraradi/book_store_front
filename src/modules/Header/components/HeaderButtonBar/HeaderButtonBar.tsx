import CustomButton from "@/shared/components/CustomButton/CustomButton";
import { FC } from "react";
import styles from "./styles.module.scss";

const HeaderButtonBar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <CustomButton type="primary" disable={false} link="">
        Log In/ Sing Up
      </CustomButton>
    </div>
  );
};

export default HeaderButtonBar;
