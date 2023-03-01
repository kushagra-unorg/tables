type ButtonHeaderType = {
  title: string;
  key: string;
  type: "button";
  clickFunction: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    d: unknown
  ) => void;
};

type InputHeaderType = {
  title: string;
  key: string;
  type: "input";
  inputType:
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "file"
    | "image"
    | "password"
    | "tel"
    | "text"
    | "time"
    | "number";
  changeFunction: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    d: unknown
  ) => void;
};

type SelectHeaderType = {
  title: string;
  key: string;
  type: "select";
  selectOptions: { text: string; value: string | number }[];
  defaultCheck?: "text" | "value";
  changeFunction: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    d: unknown
  ) => void;
};

type BasicHeaderType = {
  title: string;
  key: string;
  type: "image" | "text";
};

export type TableHeaderType =
  | BasicHeaderType
  | InputHeaderType
  | ButtonHeaderType
  | SelectHeaderType;

export type TableButtonType = {
  click: (e: React.MouseEvent<HTMLButtonElement>, data: unknown) => void;
  text: string;
};
