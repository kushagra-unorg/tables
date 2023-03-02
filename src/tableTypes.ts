type ButtonHeaderType = {
  type: "button";
  clickFunction: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    d: unknown
  ) => void;
};

type InputHeaderType = {
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
  type: "select";
  selectOptions: { text: string; value: string | number }[];
  defaultCheck?: "text" | "value";
  changeFunction: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    d: unknown
  ) => void;
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
  click: (e: React.MouseEvent<HTMLButtonElement>, data: unknown) => void;
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
