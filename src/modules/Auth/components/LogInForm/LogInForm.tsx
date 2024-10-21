"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CustomInput from "@/shared/components/CustomInput/CustomInput";
import ErrorNotification from "@/shared/components/ErrorNotification/ErrorNotification";

import emailImage from "@/assets/icons/Mail.png";
import passwordImage from "@/assets/icons/Hide.png";
import styles from "./styles.module.scss";
import CustomButton from "@/shared/components/CustomButton/CustomButton";

type FormData = {
  email: string;
  password: string;
};
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)
      .required(),
  })
  .required();

const LogInForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const logIn = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Log In</h2>
      <form className={styles.form} onSubmit={handleSubmit(logIn)}>
        <div className={styles.inputWrapper}>
          <CustomInput<FormData>
            icon={emailImage}
            register={register}
            name="email"
            placeholder="email"
            value={watch("email")}
            validationStatus={errors.email?.message ? "error" : "success"}
          />
          <ErrorNotification
            fieldName="Email"
            text="Enter your email"
            isBeingFilledIn={watch("email")?.length > 0}
            validationStatus={errors.email ? "error" : "success"}
          />
        </div>
        <div className={styles.inputWrapper}>
          <CustomInput<FormData>
            icon={passwordImage}
            register={register}
            name="password"
            placeholder="password"
            value={watch("password")}
            validationStatus={errors.password ? "error" : "success"}
          />
          <ErrorNotification
            fieldName="Password"
            text="Enter your password"
            isBeingFilledIn={watch("password")?.length > 0}
            validationStatus={errors.password ? "error" : "success"}
          />
        </div>
        <CustomButton type="primary" disable={false} link="" text="Log In" />
      </form>
    </div>
  );
};

export default LogInForm;
