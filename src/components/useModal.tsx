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
  const [selectedModal, setSelectedModal] = useState<ModalConfigType>();
  let ModalElm: ReactNode;
  const openModal = (name: string) => {
    console.log("name :>> ", name);
    console.log("!isOpen :>> ", !isOpen);
    if (!isOpen) {
      console.log("isOpen :>> ", isOpen);
      setIsOpen(true);
      let modal = findModal(name, modalConfig);
      console.log("modal :>> ", modal);
      setSelectedModal(modal);
    }
  };
  const closeModal = () => {
    if (isOpen) {
      setIsOpen(false);
      setSelectedModal(undefined);
    }
  };

  useEffect(() => {
    if (Array.isArray(modalConfig)) setSelectedModal(modalConfig[0]);
    else setSelectedModal(modalConfig);
    return () => setIsOpen(false);
  }, [modalConfig]);

  useEffect(() => {
    if (selectedModal) {
      const modalProps = {
        subtitle: selectedModal.subtitle,
        height: selectedModal.height,
        width: selectedModal.width,
      };
      ModalElm ==
      (
        <Modal
          title={selectedModal.title}
          type={selectedModal.type}
          isOpen={isOpen}
          handleClose={closeModal}
          children={selectedModal.children}
          {...modalProps}
        />
      );
    }
    return () => setIsOpen(false);
  }, [selectedModal]);

  return { isOpen, openModal, closeModal, Modal: ModalElm };
};

export default useModal;
