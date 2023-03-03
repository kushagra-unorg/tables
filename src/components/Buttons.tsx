import { ReactNode } from "react";
import { ClickEventType } from "./types/events";
import { ColorsType } from "./types/types";
import { AddIcon, EditIcon, RemoveIcon } from "./Icons";

type ButtonBasePropType = {
  children: ReactNode;
  classes: string;
  isDisabled: boolean;
  clickEvent:
    | ((e: ClickEventType<HTMLButtonElement>, o?: unknown) => void)
    | Function;
  type?: "button" | "reset" | "submit";
  backgroundColor?: ColorsType;
  fontColor?: ColorsType;
  side?: "left" | "right";
};

const DEFAULT_BUTTON_PROPS: Partial<ButtonBasePropType> = {
  type: "button",
  isDisabled: false,
  classes: "",
  fontColor: "white",
  backgroundColor: "dark-purple",
};

function BaseButton({
  children,
  Icon = undefined,
  side = "left",
}: {
  children: ReactNode;
  Icon?: ReactNode;
  side?: "left" | "right";
}) {
  if (!Icon) return <>{children}</>;
  switch (side) {
    case "left":
      return (
        <>
          {Icon}
          {children}
        </>
      );
    case "right":
      return (
        <>
          {children}
          {Icon}
        </>
      );
  }
}

/* eslint-disable react/button-has-type */
export function Button({
  children,
  classes,
  isDisabled,
  clickEvent,
  type,
  fontColor,
  backgroundColor,
}: ButtonBasePropType) {
  return (
    <button
      disabled={isDisabled}
      className={`${classes} text-${fontColor} bg-${backgroundColor}`}
      type={type}
      onClick={(e) => clickEvent(e)}
    >
      <BaseButton children={children} />
    </button>
  );
}

Button.defaultProps = { ...DEFAULT_BUTTON_PROPS };

export function AddButton({
  children,
  classes,
  isDisabled,
  clickEvent,
  type,
  fontColor,
  backgroundColor,
  side = "left",
}: ButtonBasePropType) {
  return (
    <button
      disabled={isDisabled}
      className={`add-btn ${classes} text-${fontColor} bg-${backgroundColor}`}
      type={type}
      onClick={(e) => clickEvent(e)}
    >
      <BaseButton side={side} Icon={<AddIcon />} children={children} />
    </button>
  );
}

AddButton.defaultProps = { ...DEFAULT_BUTTON_PROPS };

export function EditButton({
  children,
  classes,
  isDisabled,
  clickEvent,
  type,
  fontColor,
  backgroundColor,
  side = "left",
}: ButtonBasePropType) {
  return (
    <button
      disabled={isDisabled}
      className={`edit-btn ${classes} text-${fontColor} bg-${backgroundColor}`}
      type={type}
      onClick={(e) => clickEvent(e)}
    >
      <BaseButton side={side} Icon={<EditIcon />} children={children} />
    </button>
  );
}

EditButton.defaultProps = { ...DEFAULT_BUTTON_PROPS };

export function DeleteButton({
  children,
  classes,
  isDisabled,
  clickEvent,
  type,
  fontColor,
  backgroundColor,
  side = "left",
}: ButtonBasePropType) {
  return (
    <button
      disabled={isDisabled}
      className={`del-btn ${classes} text-${fontColor} bg-${backgroundColor}`}
      type={type}
      onClick={(e) => clickEvent(e)}
    >
      <BaseButton side={side} Icon={<RemoveIcon />} children={children} />
    </button>
  );
}

DeleteButton.defaultProps = { ...DEFAULT_BUTTON_PROPS };
