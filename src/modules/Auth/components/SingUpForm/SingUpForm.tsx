"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomInput from "@/shared/components/CustomInput/CustomInput";
import ErrorNotification from "@/shared/components/ErrorNotification/ErrorNotification";

import emailImage from "@/assets/icons/Mail.png";
import passwordImage from "@/assets/icons/Hide.png";
import styles from "./styles.module.scss";
import CustomButton from "@/shared/components/CustomButton/CustomButton";
import { SingUpSchema } from "./SingUpSchema";
import UserServiceAPI from "@/services/UserServiceAPI";

interface ISingUpData {
  email: string;
  password: string;
  passwordReplay: string;
}

const SingUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISingUpData>({
    resolver: yupResolver(SingUpSchema),
    mode: "onTouched",
  });
  const singUp = async (data: ISingUpData) => {
    const dataForRegister = {
      email: data.email,
      password: data.password,
    };
    const user = await UserServiceAPI.registerUser(dataForRegister);

    console.log(user);
  };

  console.log(errors);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Sing Up</h2>
      <form className={styles.form} onSubmit={handleSubmit(singUp)}>
        <div className={styles.inputWrapper}>
          <CustomInput<ISingUpData>
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
          <CustomInput<ISingUpData>
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
        <div className={styles.inputWrapper}>
          <CustomInput<ISingUpData>
            icon={passwordImage}
            register={register}
            name="passwordReplay"
            placeholder="passwordReplay"
            value={watch("passwordReplay")}
            validationStatus={errors.password ? "error" : "success"}
          />
          <ErrorNotification
            fieldName="password Replay"
            text="Repeat your password without errors"
            isBeingFilledIn={watch("passwordReplay")?.length > 0}
            validationStatus={errors.passwordReplay ? "error" : "success"}
          />
        </div>
        <CustomButton type="primary" disable={false} link="" text="Sing Up" />
      </form>
    </div>
  );
};

export default SingUpForm;
