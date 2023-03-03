import { ClickEventType } from "./types/events";

type ButtonBasePropType = {
  children: React.ReactNode;
  classes: string;
  isDisabled: boolean;
  clickEvent:
    | ((e: ClickEventType<HTMLButtonElement>, o?: unknown) => void)
    | Function;
  type?: "button" | "reset" | "submit";
};

const DEFAULT_BUTTON_PROPS = {
  type: "button",
  isDisabled: false,
  classes: "",
};

/* eslint-disable react/button-has-type */
function Button({
  children,
  classes,
  isDisabled,
  clickEvent,
  type,
}: ButtonBasePropType) {
  return (
    <button
      disabled={isDisabled}
      className={`${classes}`}
      type={type}
      onClick={(e) => clickEvent(e)}
    >
      {children}
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
}: ButtonBasePropType) {
  return (
    <button
      disabled={isDisabled}
      className={`${classes} add-btn`}
      type={type}
      onClick={(e) => clickEvent(e)}
    >
      {children}
    </button>
  );
}

AddButton.defaultProps = { ...DEFAULT_BUTTON_PROPS };

export function AddButtonCircle({
  children,
  classes,
  isDisabled,
  clickEvent,
  type,
}: ButtonBasePropType) {
  return (
    <button
      disabled={isDisabled}
      className={`${classes} add-btn add-btn-circle`}
      type={type}
      onClick={(e) => clickEvent(e)}
    >
      {children}
      {/* <AddCircle /> */}
    </button>
  );
}

AddButtonCircle.defaultProps = { ...DEFAULT_BUTTON_PROPS };

export function BackButton({
  children,
  classes,
  isDisabled,
  clickEvent,
  type,
}: ButtonBasePropType) {
  return (
    <button
      disabled={isDisabled}
      className={`${classes} back-btn`}
      type={type}
      onClick={(e) => clickEvent(e)}
    >
      {children}
      {/* <ArrowLeft /> */}
    </button>
  );
}

BackButton.defaultProps = { ...DEFAULT_BUTTON_PROPS };

export function EditButton({
  children,
  classes,
  isDisabled,
  clickEvent,
  type,
}: ButtonBasePropType) {
  return (
    <button
      disabled={isDisabled}
      className={`${classes} edit-btn`}
      type={type}
      onClick={(e) => clickEvent(e)}
    >
      {children}
      {/* <EditPencil /> */}
    </button>
  );
}

EditButton.defaultProps = { ...DEFAULT_BUTTON_PROPS };

export default Button;
