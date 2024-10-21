import Auth from "@/modules/Auth/Auth";
import SingUpForm from "@/modules/Auth/components/SingUpForm/SingUpForm";
import { FC } from "react";

const SingUpPage: FC = () => {
  return (
    <Auth>
      <SingUpForm />
    </Auth>
  );
};

export default SingUpPage;
