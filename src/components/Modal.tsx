import { ReactNode, useEffect } from "react";
import { CloseIcon } from "./Icons";

type ModalPropsType = {
  title: string;
  type: "right" | "bottom";
  subtitle?: string;
  isOpen: boolean;
  height?: 50 | 40 | 30 | 100;
  width?: 80 | 60 | 40 | 30 | 100;
  handleClose: () => void;
  children: ReactNode;
};

function Modal({
  title,
  type,
  subtitle,
  width,
  height,
  isOpen,
  handleClose,
  children,
}: ModalPropsType) {
  return (
    <div
      style={{
        width: `${type === "bottom" ? "100" : width}vw`,
        height: `${type === "right" ? "100" : height}vh`,
      }}
      className={`modal ${type}-modal`}
    >
      <div className="modal-header">
        <h2>{title}</h2>
        {subtitle?.length ? <p>{subtitle}</p> : null}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */}
        <div onClick={handleClose}>
          <CloseIcon />
        </div>
      </div>
      <div className="modal-content">{children}</div>
    </div>
  );
}

Modal.defaultProps = { subtitle: "", width: 40, height: 30 };

export default Modal;
