import { useEffect } from "react";
import "./App.css";
import { Button } from "./components/Buttons";
import { ModalConfigType } from "./components/types/modalTypes";
import useModal from "./components/useModal";

function TestModalBody({ title }: { title: string }) {
  return <h1>Modal {title}</h1>;
}

const modalConfig: ModalConfigType[] = [
  {
    name: "test",
    title: "test",
    type: "right",
    children: <TestModalBody title="test" />,
  },
  {
    name: "test2",
    title: "test2",
    type: "bottom",
    children: <TestModalBody title="test2" />,
  },
  {
    name: "test3",
    title: "test3",
    type: "right",
    children: <TestModalBody title="test3" />,
  },
  {
    name: "test4",
    title: "test4",
    type: "bottom",
    children: <TestModalBody title="test4" />,
  },
];

function App() {
  const { openModal, Modal } = useModal(modalConfig);

  return (
    <div className="App">
      {Modal}
      <Button clickEvent={() => openModal("test")}>Click</Button>
      <Button clickEvent={() => openModal("test2")}>Click2</Button>
      <Button clickEvent={() => openModal("test3")}>Click3</Button>
      <Button clickEvent={() => openModal("test4")}>Click4</Button>
    </div>
  );
}

export default App;
