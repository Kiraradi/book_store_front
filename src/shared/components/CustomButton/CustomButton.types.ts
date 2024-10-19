import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type ICustomButton =
  | {
      type: "primary" | "badge" | "secondary";
      text?: string;
      img?: StaticImageData;
      counter?: number;
      disable: boolean;
      children?: ReactNode;
      link: string;
      callback?: never;
    }
  | {
      type: "primary" | "badge" | "secondary";
      text?: string;
      img?: StaticImageData;
      counter?: number;
      disable: boolean;
      children?: ReactNode;
      link?: never;
      callback: () => void;
    };
