import { useState, useEffect, ReactNode, useMemo } from "react";
import { ModalConfigType } from "./types/modalTypes";
import Modal from "./Modal";

const ERROR_MODAL_CONFIG: ModalConfigType = {
  name: "error",
  title: "Error",
  type: "bottom",
  subtitle: "You Selected the wrong modal",
  height: 50,
  children: (
    <>
      {" "}
      <h4
        style={{
          textTransform: "uppercase",
          fontSize: "2rem",
          textAlign: "left",
          color: "red",
        }}
      >
        Error
      </h4>{" "}
    </>
  ),
};

const findModal = (
  name: string,
  modalConfig: ModalConfigType | ModalConfigType[]
) => {
  let foundModal: ModalConfigType | undefined;
  if (!Array.isArray(modalConfig)) {
    if (modalConfig.name === name) foundModal = modalConfig;
    else foundModal = ERROR_MODAL_CONFIG;
  } else {
    foundModal = modalConfig.find((modal) => modal.name === name);
    if (!foundModal) foundModal = ERROR_MODAL_CONFIG;
  }
  return foundModal;
};

const makeModals = (
  conf: ModalConfigType[],
  openModals: boolean[] | undefined,
  closeModal: () => void,
  setOpenModals: React.Dispatch<React.SetStateAction<boolean[] | undefined>>
) => {
  const modals: { name: string; elm: ReactNode }[] = [];
  setOpenModals([...conf.map(() => false), false]);
  conf.forEach((m, i) => {
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
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          {m.children}
        </Modal>
      ),
    });
  });
  modals.push({
    name: ERROR_MODAL_CONFIG.name,
    elm: (
      <Modal
        title={ERROR_MODAL_CONFIG.title}
        type={ERROR_MODAL_CONFIG.type}
        isOpen={openModals ? openModals[openModals.length - 1] : false}
        handleClose={closeModal}
        subtitle={ERROR_MODAL_CONFIG.subtitle}
        height={ERROR_MODAL_CONFIG.height}
      >
        {ERROR_MODAL_CONFIG.children}
      </Modal>
    ),
  });
  return modals;
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
    console.log("🚀 ~ file: useModal.tsx:116 ~ modal:", modal);
    console.log("🚀 ~ file: useModal.tsx:118 ~ allModals:", allModals);
    if (allModals) {
      const index = allModals.findIndex((m) => m.name === modal.name);
      console.log("🚀 ~ file: useModal.tsx:118 ~ index:", index);
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

  const closeModal = () => {
    if (isOpen) {
      setIsOpen(false);
      setOpenModals((s) => s?.map(() => false));
    }
  };

  const allModals = useMemo<{ name: string; elm: ReactNode }[]>(() => {
    if (Array.isArray(modalConfig))
      return makeModals(modalConfig, openModals, closeModal, setOpenModals);
    return makeModals([modalConfig], openModals, closeModal, setOpenModals);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalConfig]);
  const openModal = (name: string) => {
    if (!isOpen) {
      setIsOpen(true);
      const modal = findModal(name, modalConfig);
      console.log("🚀 ~ file: useModal.tsx:147 ~ openModal ~ modal:", modal);
      console.log(
        "🚀 ~ file: useModal.tsx:147 ~ openModal ~ allModals:",
        allModals
      );
      changeModal(allModals, setOpenModals, modal);
    }
  };

  useEffect(() => {
    console.log("changed OpenModals::>", openModals);
  }, [openModals]);

  useEffect(() => {
    console.log("changed AllModals::>", allModals);
  }, [allModals]);

  return {
    isOpen,
    openModal,
    closeModal,
    Modal: (
      <div className={`modal-wrapper ${isOpen ? "open" : "close"}-modal`}>
        {allModals?.map((m, i) => (
          // eslint-disable-next-line react/jsx-key
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
