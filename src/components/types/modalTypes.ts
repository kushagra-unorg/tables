import { ReactNode } from "react";

export type ModalConfigType = {
  name: string;
  title: string;
  type: "right" | "bottom";
  subtitle?: string;
  height?: 50 | 40 | 30 | 100;
  width?: 80 | 60 | 40 | 30 | 100;
  children: ReactNode;
};
