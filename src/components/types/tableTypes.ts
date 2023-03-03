import { InputTypes } from "../Form";
import { ChangeEventType, ClickEventType } from "./events";

type ButtonHeaderType = {
  type: "button";
  clickFunction: (e: ClickEventType<HTMLButtonElement>, d: unknown) => void;
};

type InputHeaderType = {
  type: "input";
  inputType: InputTypes;
  changeFunction: (e: ChangeEventType<HTMLInputElement>, d: unknown) => void;
};

type SelectHeaderType = {
  type: "select";
  selectOptions: { text: string; value: string | number }[];
  defaultCheck?: "text" | "value";
  changeFunction: (e: ChangeEventType<HTMLSelectElement>, d: unknown) => void;
};

type BasicHeaderType = {
  type: "image" | "text";
};

export type TableHeaderType = (
  | BasicHeaderType
  | InputHeaderType
  | ButtonHeaderType
  | SelectHeaderType
) & {
  title: string;
  key: string;
  classes?: string;
};

export type TableButtonType = {
  click: (e: ClickEventType<HTMLButtonElement>, data: unknown) => void;
  text: string;
  classes?: string;
};
export type tableConfigType = {
  data: object[];
  classes?: string;
  rowOnClick?: <T>(data: T) => void;
  headers?: TableHeaderType[];
  buttons?: TableButtonType[];
};
