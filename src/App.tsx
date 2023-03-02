import { useState } from "react";
import "./App.css";
import useDynamicTable from "./components/Raw";
import { TableButtonType } from "./tableTypes";

import {
  TEST_ORDERS,
  TEST_INVENTORIES,
  TEST_SLOTS,
  TEST_UNITS,
  TEST_CUSTOMERS,
} from "./testData";
import { TextInput } from "./components/Form";
import { ChangeEvent } from "./components/types/events";

function App() {
  const [buttons, setButtons] = useState<TableButtonType[]>([]);
  const [val, setVal] = useState("HE");
  const [selectedTable, setSelectedTable] = useState<
    | typeof TEST_INVENTORIES
    | typeof TEST_SLOTS
    | typeof TEST_UNITS
    | typeof TEST_ORDERS
    | typeof TEST_CUSTOMERS
  >(TEST_SLOTS);
  const TEMP_BUTTON: TableButtonType = {
    text: "Hello",
    click: (e: any, data: any) => {
      console.log(data);
    },
    classes: "Hello",
  };
  const rowOnClick = <T,>(data: T): void => {
    console.log("ROW:>", data);
  };
  const { Table } = useDynamicTable({
    data: selectedTable.data,
    headers: selectedTable.headers,
    rowOnClick,
    buttons,
  });
  return (
    <div className="App">
      {Table}
      <button
        type="button"
        onClick={() => setButtons((t) => (t.length ? [] : [TEMP_BUTTON]))}
      >
        Toggle Buttons
      </button>
      <button type="button" onClick={() => setSelectedTable({ ...TEST_SLOTS })}>
        Slots
      </button>
      <button
        type="button"
        onClick={() => setSelectedTable({ ...TEST_ORDERS })}
      >
        Order
      </button>
      <button
        type="button"
        onClick={() => setSelectedTable({ ...TEST_INVENTORIES })}
      >
        Inventory
      </button>
      <button type="button" onClick={() => setSelectedTable({ ...TEST_UNITS })}>
        Unit
      </button>
      <TextInput
        id="1"
        name="1"
        type="text"
        placeholder="HEY"
        value={val}
        onChange={(e: ChangeEvent) => setVal(e.target.value)}
      />
    </div>
  );
}

export default App;
