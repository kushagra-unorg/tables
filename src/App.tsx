import "./App.css";
import { Button } from "./components/Buttons";
import Modal from "./components/Modal";
import { ModalConfigType } from "./components/types/modalTypes";
import useModal from "./components/useModal";

function TestModalBody() {
  return <h1>Modal Test Hello</h1>;
}

const modalConfig: ModalConfigType = {
  name: "test",
  title: "test",
  type: "right",
  children: <TestModalBody />,
};

function App() {
  const { closeModal, isOpen, openModal, Modal } = useModal(modalConfig);
  return (
    <div className="App">
      {isOpen && Modal}
      <Button clickEvent={() => openModal("test")}>Click</Button>
    </div>
  );
}

export default App;
