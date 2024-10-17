"use client";

import { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { useRouter } from "next/navigation";
import { ICustomButton } from "./CustomButton.types";

const CustomButton: FC<ICustomButton> = (props) => {
  const router = useRouter();

  const handleClick = () => {
    if (props.link) {
      router.push(props.link);
    }

    if (props.callback) {
      props.callback();
    }
  };

  return (
    <button
      className={cn(styles.button, styles[props.type])}
      onClick={handleClick}
    >
      {props.text && <span className={styles.text}>{props.text}</span>}
      {props.children && props.children}
    </button>
  );
};

export default CustomButton;
