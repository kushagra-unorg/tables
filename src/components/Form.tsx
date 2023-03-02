import { ChangeEventHandler, ReactNode, useRef } from "react";
import { ChangeEvent, FormEventType } from "./types/events";

export type InputTypes =
  | "checkbox"
  | "radio"
  | "date"
  | "datetime-local"
  | "file"
  | "password"
  | "tel"
  | "email"
  | "text"
  | "time"
  | "number";

export function Form({
  children,
  className,
  onSubmit,
  ref,
}: {
  children: ReactNode;
  onSubmit?: (e: FormEventType) => void;
  className?: string;
  ref?: React.MutableRefObject<HTMLFormElement>;
}) {
  const formProps = { onSubmit, className, ref };
  return <form {...formProps}>{children}</form>;
}

type BaseInputType = {
  name: string;
  id: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

type TextInputPropsType = {
  type: "text" | "password";
  minlength?: number;
  maxlength?: number;
  placeholder?: string;
  value?: string;
} & BaseInputType;

export function TextInput(inputProps: TextInputPropsType) {
  return <input {...inputProps} />;
}

type TelInputPropsType = {
  pattern?: string;
  placeholder?: string;
  value?: string;
} & BaseInputType;

export function TelInput(inputProps: TelInputPropsType) {
  return <input type="tel" {...inputProps} />;
}

type NumberInputPropsType = {
  placeholder?: string;
  value?: string;
  min?: number;
  max?: number;
  step?: number;
} & BaseInputType;

export function NumberInput(inputProps: NumberInputPropsType) {
  return <input type="number" {...inputProps} />;
}

type EmailInputPropsType = {
  placeholder?: string;
  value?: string;
} & BaseInputType;

export function EmailInput(inputProps: EmailInputPropsType) {
  return <input type="email" {...inputProps} />;
}

type DateInputPropsType = {
  type: "date" | "datetime-local" | "time";
  min: string;
  max: string;
} & BaseInputType;

export function DateInput(dateInputProps: DateInputPropsType) {
  return <input {...dateInputProps} />;
}

type CheckboxInputPropsType = {} & BaseInputType;

export function CheckboxInput(checkboxInputProps: CheckboxInputPropsType) {
  return <input type="checkbox" {...checkboxInputProps} />;
}

type RadioInputPropsType = {} & BaseInputType;

export function RadioInput(radioInputProps: RadioInputPropsType) {
  return <input type="radio" {...radioInputProps} />;
}

type FileInputPropsType = {
  maxSize?: number;
  reference?: React.MutableRefObject<HTMLInputElement>;
  accept?: string;
} & BaseInputType;

export function FileInput({
  maxSize = 1024,
  name,
  id,
  reference = null!,
  accept = "image/png, image/jpeg",
  onChange = () => {
    return;
  },
}: FileInputPropsType) {
  const imageRef = useRef<HTMLInputElement>(null!);
  const handleFile = async (e: ChangeEvent) => {
    if (!e.target.files?.length || !maxSize) return;
    const file = e.target.files[0];
    if (file.size / 1024 < maxSize) onChange(e);
    alert(`Max Size Increased: Upload file below ${maxSize} KB`);
    imageRef.current.value = "";
  };
  return (
    <input
      required
      id={id}
      onChange={handleFile}
      ref={(ref) => {
        if (ref) {
          imageRef.current = ref;
          reference.current = ref;
        }
      }}
      type="file"
      accept={accept}
      name={name}
    />
  );
}
