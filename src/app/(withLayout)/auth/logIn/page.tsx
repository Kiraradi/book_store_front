import Auth from "@/modules/Auth/Auth";
import LogInForm from "@/modules/Auth/components/LogInForm/LogInForm";
import { FC } from "react";

const LogInPage: FC = () => {
  return (
    <Auth>
      <LogInForm />
    </Auth>
  );
};

export default LogInPage;
