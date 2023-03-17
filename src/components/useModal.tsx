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
  const [openModals, setOpenModals] = useState<boolean[]>();
  const [selectedModal, setSelectedModal] = useState<number>(0);
  const [allModals, setAllModals] =
    useState<{ name: string; elm: ReactNode }[]>();
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
      changeModal();
    }
  };

  const makeModals = (conf: ModalConfigType[]) => {
    let modals: { name: string; elm: ReactNode }[] = [];
    setOpenModals(conf.map(() => false));
    conf.map((m, i) => {
      const modalProps = {
        subtitle: m.subtitle,
        height: m.height,
        width: m.width,
      };
      modals.push({
        name: m.name,
        elm: (
          <Modal
            title={m.title}
            type={m.type}
            isOpen={openModals ? openModals[i] : false}
            handleClose={closeModal}
            {...modalProps}
          >
            {m.children}
          </Modal>
        ),
      });
    });
    setAllModals(modals);
  };

  // TODO:: Make Container/BG Static and swap children when open or close
  const changeModal = (
    modal: ModalConfigType = {
      name: "",
      children: "",
      title: "",
      type: "bottom",
    }
  ) => {
    console.log("modal CHange :>> ", modal);
    if (modal) {
      if (allModals) {
        const index = allModals.findIndex((m) => m.name === modal.name);
        setSelectedModal(index);
        setOpenModals((s) => s?.map((b, i) => i === index));
      }
    }
  };

  useEffect(() => {
    if (Array.isArray(modalConfig)) makeModals(modalConfig);
    else makeModals([modalConfig]);
    return () => setIsOpen(false);
  }, [modalConfig]);

  useEffect(() => {
    console.log("openModals:", openModals);
  }, [openModals]);

  return {
    isOpen,
    openModal,
    closeModal,
    Modal: (
      <div className={`modal-wrapper ${isOpen ? "open" : "close"}-modal`}>
        {allModals?.map((m, i) => (
          <div
            className={`modal-element-container ${
              openModals && openModals[i] ? "open" : "close"
            }-modal`}
          >
            {m.elm}
          </div>
        ))}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */}
        <div
          onClick={closeModal}
          className={`modal-bg ${isOpen ? "open" : "close"}-modal`}
        />
      </div>
    ),
  };
};

export default useModal;