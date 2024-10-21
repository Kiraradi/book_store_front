import { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface IErrorNotification {
  fieldName: string;
  text: string;
  isBeingFilledIn: boolean;
  validationStatus?: "success" | "error";
}

const ErrorNotification: FC<IErrorNotification> = (props) => {
  const getText = () => {
    if (!props.isBeingFilledIn) {
      return props.text;
    }
    if (props.validationStatus && props.validationStatus === "success") {
      return `${props.fieldName} available!`;
    }
    return `${props.fieldName} is not correct!`;
  };
  const text = getText();
  return (
    <p
      className={cn(styles.text, {
        [styles.success]:
          props.validationStatus === "success" && props.isBeingFilledIn,
        [styles.error]:
          props.validationStatus === "error" && props.isBeingFilledIn,
      })}
    >
      {text}
    </p>
  );
};

export default ErrorNotification;
