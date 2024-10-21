import Layout from "@/modules/Layout/Layout";
import { FC, ReactNode } from "react";

interface ICustomLayout {
  children: ReactNode;
}

const CustomLayout: FC<ICustomLayout> = (props) => {
  return <Layout>{props.children}</Layout>;
};

export default CustomLayout;
