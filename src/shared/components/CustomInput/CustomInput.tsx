import { ChangeEvent, FC } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import cn from "classnames";

interface ICustomInput<T extends FieldValues> {
  icon: StaticImageData;
  placeholder: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<T>;
  name: Path<T>;
  validationStatus?: "success" | "error";
}

const CustomInput = <T extends FieldValues>(props: ICustomInput<T>) => {
  return (
    <div className={styles.wrapper}>
      <Image src={props.icon} alt="icon for input" className={styles.icon} />
      <input
        className={cn(styles.input, {
          [styles.success]:
            props.validationStatus === "success" && props.value?.length > 0,
          [styles.error]:
            props.validationStatus === "error" && props.value?.length > 0,
        })}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        {...(props.register && props.register(props.name))}
      />
    </div>
  );
};

export default CustomInput;
