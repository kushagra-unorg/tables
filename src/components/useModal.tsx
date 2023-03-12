import { useState, useEffect, ReactNode } from "react";
import { ModalConfigType } from "./types/modalTypes";
import Modal from "./Modal";

const findModal = (
  name: string,
  modalConfig: ModalConfigType | ModalConfigType[]
) => {
  let foundModal: ModalConfigType | undefined;
  if (!Array.isArray(modalConfig)) foundModal = modalConfig;
  else {
    foundModal = modalConfig.find((modal) => modal.name === name);
    if (!foundModal) foundModal = modalConfig[0];
  }
  return foundModal;
};

const useModal = (modalConfig: ModalConfigType | ModalConfigType[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState<ReactNode>();
  const openModal = (name: string) => {
    console.log("name :>> ", name);
    console.log("!isOpen :>> ", !isOpen);
    if (!isOpen) {
      console.log("isOpen :>> ", isOpen);
      setIsOpen(true);
      let modal = findModal(name, modalConfig);
      console.log("modal :>> ", modal);
      changeModal(modal);
    }
  };
  const closeModal = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (Array.isArray(modalConfig)) changeModal(modalConfig[0]);
    else changeModal(modalConfig);
    return () => setIsOpen(false);
  }, [modalConfig]);

  useEffect(() => {
    console.log("isOpen");
  }, [isOpen]);

  // TODO:: Make Container/BG Static and swap children when open or close
  const changeModal = (modal: ModalConfigType) => {
    if (modal) {
      console.log("modal :>> ", modal);
      const modalProps = {
        subtitle: modal.subtitle,
        height: modal.height,
        width: modal.width,
      };
      setSelectedModal(
        <>
          <Modal
            title={modal.title}
            type={modal.type}
            isOpen={isOpen}
            handleClose={closeModal}
            {...modalProps}
          >
            {modal.children}
          </Modal>
        </>
      );
    }
  };

  return {
    isOpen,
    openModal,
    closeModal,
    Modal: (
      <div className={`modal-wrapper ${isOpen ? "open-modal" : "close-modal"}`}>
        {selectedModal}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */}
        <div
          onClick={closeModal}
          className={`modal-bg ${isOpen ? "open-modal" : "close-modal"}`}
        />
      </div>
    ),
  };
};

export default useModal;
