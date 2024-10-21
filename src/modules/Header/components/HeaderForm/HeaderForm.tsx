"use client";
import CustomInput from "@/shared/components/CustomInput/CustomInput";
import { ChangeEvent, FC, useState } from "react";
import SearchIcons from "@/assets/icons/Search.png";
import styles from "./styles.module.scss";

const HeaderForm: FC = () => {
  const [text, setText] = useState("");

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <form className={styles.form}>
      <CustomInput
        icon={SearchIcons}
        value={text}
        onChange={handleChangeText}
        placeholder="Search"
        name=""
      ></CustomInput>
    </form>
  );
};

export default HeaderForm;
