import React from "react";
// import { TEST_CUSTOMERS as TEST } from "../testData";
// import { TEST_ORDERS as TEST } from "../testData";
// import { TEST_INVENTORIES as TEST } from "../testData";
import { TEST_SLOTS as TEST } from "../testData";
// import { TEST_UNITS as TEST } from "../testData";
import { TableHeaderType, TableButtonType } from "../tableTypes";

/**
 * Function to make headers from the data object.
 * @param {object} data data object to extract keys from.
 * @returns {object} {key: key of the table header ,title: title for table header}.
 */
const makeHeaders = (data: object): TableHeaderType[] => {
  const keys = Object.keys(data);
  let headers: TableHeaderType[] = keys.map((key) => ({
    title: key.split("_").join(" "),
    type: "text",
    key: key,
  }));
  console.log("🚀 ~ file: Raw.tsx:25 ~ makeHeaders ~ headers:", headers);

  return headers;
};

/**
 * Function to make a cell from the header object.
 * @param {object} header header object to get element from.
 * @param {object} row row object.
 * @returns A JSX Element.
 */
function getCell<T>(header: TableHeaderType, row: T): React.ReactNode {
  let elm: T[keyof T] | string = "";
  if (header.key) elm = row[header.key as keyof typeof row];
  if (elm !== null)
    switch (header.type) {
      case "image":
        return <img src={elm?.toString()} />;
      case "text":
        return <>{elm?.toString()}</>;
      case "button":
        return (
          <button onClick={(e) => header.clickFunction(e, row)}>
            <>{header.title}</>
          </button>
        );
      case "input":
        return (
          <input
            type={header.inputType}
            onChange={(e) => header.changeFunction(e, row)}
            placeholder={elm?.toString()}
          />
        );
      case "select":
        return (
          <select onChange={(e) => header.changeFunction(e, row)}>
            {header.selectOptions.map((op) => (
              <option
                selected={
                  header.defaultCheck &&
                  header.defaultCheck == "text" &&
                  op.text === elm
                    ? true
                    : header.defaultCheck &&
                      header.defaultCheck == "value" &&
                      op.value === elm
                    ? true
                    : false
                }
                value={op.value}
              >
                {op.text}
              </option>
            ))}
          </select>
        );
      default:
        return "Unknown Header Type";
    }
  return "NULL";
}

/**
 * Function to make button from the btn object.
 * @param {object} btn data object to extract keys from.
 * @param {object} row row object.
 * @returns A JSX Button Element.
 */
function makeButton<T>(btn: TableButtonType, row: T): React.ReactNode {
  return <button onClick={(e) => btn.click(e, row)}>{btn.text}</button>;
}

function handleButtonClick(
  e: React.MouseEvent<HTMLButtonElement>,
  data: unknown
) {
  console.log("Clicked", data);
}

type tableDataType = {
  data: object[];
  headers?: TableHeaderType[];
};
type tablePropsType = {
  data: object[];
  headers?: TableHeaderType[];
  buttons?: TableButtonType[];
};
// TODO: Make This a Component, take props for building table(config)
// ? MAKE: on row click
// ? MAKE: Column size class(header)
// ? MAKE: rows prop
// ? MAKE: headers prop/optional
// ? MAKE: buttons prop/optional
// ? MAKE: dynamic elements(table,tr,td,th,tbody,thead)(take as props/optional)
// ? MAKE: make a hook that returns JSX Element(DynamicTable)
// ? MAKE: make JSX Elements instead of calling functions
// ? MAKE:
const Table = ({}: tablePropsType) => {
  const tableData: tableDataType = TEST;
  const tableButtons: TableButtonType[] = [
    { text: "Click", click: handleButtonClick },
  ];
  let headers: TableHeaderType[];
  if (tableData.headers) headers = tableData.headers;
  else headers = makeHeaders(tableData.data[0]);

  const Rows = tableData.data.map((data) => (
    <tbody>
      <tr>
        {headers.map((header) => (
          <td>{getCell<typeof data>(header, data)}</td>
        ))}
        {tableButtons.length
          ? tableButtons.map((btn) => (
              <td>{makeButton<typeof data>(btn, data)}</td>
            ))
          : null}
      </tr>
    </tbody>
  ));

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header.title}</th>
          ))}
        </tr>
      </thead>
      {Rows.map((row) => row)}
    </table>
  );
};

export default Table;
