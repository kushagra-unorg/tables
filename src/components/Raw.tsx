import { ReactNode, useMemo } from "react";
import {
  TableHeaderType,
  TableButtonType,
  tableConfigType,
} from "../tableTypes";
import { Table, TableHead, TableHeader, TableRow } from "./Table";

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
  return headers;
};

/**
 * Function to make a cell from the header object.
 * @param {object} header header object to get element from.
 * @param {object} row row object.
 * @returns A JSX Element(string|image|select|input|button).
 */
const getCell = <T,>(header: TableHeaderType, row: T): ReactNode => {
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
};

/**
 * Function to make a rows from the data object.
 * @param {object} data data object.
 * @param {array} headers  array of header objects.
 * @param {function} rowOnClick  function for Click on Row.
 * @returns An array of JSX Elements(tbody>tr>td)
 */
const makeRows = <T,>(
  data: T[],
  headers: TableHeaderType[],
  buttons: TableButtonType[],
  rowOnClick: <T>(data: T) => void
): ReactNode[] =>
  data.map((row) => (
    <TableRow>
      {headers.map((header) => (
        <td className={header.classes} onClick={() => rowOnClick<T>(row)}>
          {getCell<typeof row>(header, row)}
        </td>
      ))}
      {buttons.length
        ? buttons.map((btn) => <td>{makeButton<typeof row>(btn, row)}</td>)
        : null}
    </TableRow>
  ));

/**
 * Function to make columns from the header objects.
 * @param {object} headers array of headers objects.
 * @returns As array of JSX Elements(th).
 */
const makeColumns = (headers: TableHeaderType[]): ReactNode[] =>
  headers.map((header) => (
    <TableHeader classes={header.classes ? header.classes : ""}>
      {header.title}
    </TableHeader>
  ));

/**
 * Function to make button from the btn object.
 * @param {object} btn data object to extract keys from.
 * @param {object} row row object.
 * @returns A JSX Button Element.
 */
const makeButton = <T,>(btn: TableButtonType, row: T): ReactNode => (
  <button className={btn.classes} onClick={(e) => btn.click(e, row)}>
    {btn.text}
  </button>
);

const useDynamicTable = ({
  data,
  headers = [],
  buttons = [],
  classes = "",
  rowOnClick = () => {
    return;
  },
}: tableConfigType) => {
  if (!headers.length) headers = useMemo(() => makeHeaders(data[0]), [data]);

  const Rows = useMemo<ReactNode[]>(
    () => makeRows<typeof data[number]>(data, headers, buttons, rowOnClick),
    [headers, data, buttons]
  );

  const COLUMNS = useMemo<ReactNode[]>(() => makeColumns(headers), [headers]);

  const DynamicTable = useMemo(
    () => (
      <Table classes={classes}>
        <TableHead>{COLUMNS}</TableHead>
        {Rows}
      </Table>
    ),
    [Rows]
  );

  return { Table: DynamicTable, Rows, headers };
};

export default useDynamicTable;
