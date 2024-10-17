import { ChangeEvent, FC } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

interface ICustomInput {
  icon: StaticImageData;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<ICustomInput> = (props) => {
  return (
    <div className={styles.wrapper}>
      <Image src={props.icon} alt="icon for input" className={styles.icon} />
      <input
        className={styles.input}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default CustomInput;
