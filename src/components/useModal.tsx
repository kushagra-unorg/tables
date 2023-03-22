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

const makeModals = (
  conf: ModalConfigType[],
  openModals: boolean[] | undefined,
  closeModal: () => void,
  setOpenModals: React.Dispatch<React.SetStateAction<boolean[] | undefined>>,
  setAllModals: React.Dispatch<
    React.SetStateAction<
      | {
          name: string;
          elm: ReactNode;
        }[]
      | undefined
    >
  >
) => {
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

const changeModal = (
  allModals:
    | {
        name: string;
        elm: ReactNode;
      }[]
    | undefined,
  setOpenModals: React.Dispatch<React.SetStateAction<boolean[] | undefined>>,
  modal: ModalConfigType = {
    name: "",
    children: "",
    title: "",
    type: "bottom",
  }
) => {
  if (modal) {
    if (allModals) {
      const index = allModals.findIndex((m) => m.name === modal.name);
      setOpenModals((s) => s?.map((b, i) => i === index));
    }
  }
};

/**
 *@summary This hook takes the configuration object and makes modal elements in accordance 
  with the configuration, and the data provided.

 *@description It can make single/multiple modals.

 * @param {object} modalConfig Configuration object for the modal(s):
  * @field name: string;
  * @field title: string;
  * @field type: "right" | "bottom";
  * @field subtitle (optional) : string;
  * @field height (optional) : 50 | 40 | 30 | 100;
  * @field width (optional) : 80 | 60 | 40 | 30 | 100;
  * @field children: ReactNode;
 */
const useModal = (modalConfig: ModalConfigType | ModalConfigType[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModals, setOpenModals] = useState<boolean[]>();
  const [allModals, setAllModals] =
    useState<{ name: string; elm: ReactNode }[]>();
  const openModal = (name: string) => {
    if (!isOpen) {
      setIsOpen(true);
      let modal = findModal(name, modalConfig);
      changeModal(allModals, setOpenModals, modal);
    }
  };
  const closeModal = () => {
    if (isOpen) {
      setIsOpen(false);
      changeModal(allModals, setOpenModals);
    }
  };

  useEffect(() => {
    if (Array.isArray(modalConfig))
      makeModals(
        modalConfig,
        openModals,
        closeModal,
        setOpenModals,
        setAllModals
      );
    else
      makeModals(
        [modalConfig],
        openModals,
        closeModal,
        setOpenModals,
        setAllModals
      );
    return () => setIsOpen(false);
  }, [modalConfig]);

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
