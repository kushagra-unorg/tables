import { useEffect } from "react";
import "./App.css";
import { Button } from "./components/Buttons";
import { ModalConfigType } from "./components/types/modalTypes";
import useModal from "./components/useModal";

function TestModalBody() {
  return <h1>Modal Test Hello</h1>;
}
function TestModal2Body() {
  return <h1>Modal2 Test Hello</h1>;
}

const modalConfig: ModalConfigType[] = [
  {
    name: "test",
    title: "test",
    type: "right",
    children: <TestModalBody />,
  },
  {
    name: "test2",
    title: "test2",
    type: "bottom",
    children: <TestModal2Body />,
  },
];

function App() {
  const { closeModal, isOpen, openModal, Modal } = useModal(modalConfig);
  useEffect(() => {
    console.log("isOpen:>>", isOpen);
    console.log("Modal:>>", Modal);
  }, [Modal]);

  return (
    <div className="App">
      {Modal}
      <Button clickEvent={() => openModal("test")}>Click</Button>
      <Button clickEvent={() => openModal("test2")}>Click2</Button>
    </div>
  );
}

export default App;
