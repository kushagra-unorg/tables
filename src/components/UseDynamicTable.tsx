import { ReactNode, useMemo } from "react";
import {
  TableHeaderType,
  TableButtonType,
  TableConfigType,
} from "./types/tableTypes";
import { Table, TableCell, TableHead, TableHeader, TableRow } from "./Table";
import {
  CheckboxInput,
  DateInput,
  EmailInput,
  FileInput,
  InputTypes,
  NumberInput,
  RadioInput,
  TelInput,
  TextInput,
} from "./Form";
import { ChangeEventType, ClickEventType } from "./types/events";
import { Button } from "./Buttons";
/**
 * Function to make headers from the data object.
 * @param {object} data data object to extract keys from.
 * @returns {object} {key: key of the table header ,title: title for table header}.
 */
const makeHeaders = (data: object): TableHeaderType[] => {
  const keys = Object.keys(data);
  const headers: TableHeaderType[] = keys.map((key) => ({
    title: key.split("_").join(" "),
    type: "text",
    key,
  }));
  return headers;
};

const getInput = <T,>(
  type: InputTypes,
  func: (e: ChangeEventType<HTMLInputElement>, d: unknown) => void,
  defaultValue: string | undefined,
  row: T
): JSX.Element => {
  switch (type) {
    case "checkbox":
      return (
        <CheckboxInput
          defaultValue={defaultValue}
          onChange={(e: ChangeEventType<HTMLInputElement>) => func(e, row)}
          id=""
          name=""
        />
      );
    case "radio":
      return (
        <RadioInput
          defaultValue={defaultValue}
          onChange={(e: ChangeEventType<HTMLInputElement>) => func(e, row)}
          id=""
          name=""
        />
      );
    case "text":
    case "password":
      return (
        <TextInput
          defaultValue={defaultValue}
          type={type}
          onChange={(e: ChangeEventType<HTMLInputElement>) => func(e, row)}
          id=""
          name=""
        />
      );
    case "tel":
      return (
        <TelInput
          defaultValue={defaultValue}
          onChange={(e: ChangeEventType<HTMLInputElement>) => func(e, row)}
          id=""
          name=""
        />
      );
    case "datetime-local":
    case "date":
    case "time":
      return (
        <DateInput
          defaultValue={defaultValue}
          type={type}
          onChange={(e: ChangeEventType<HTMLInputElement>) => func(e, row)}
          id=""
          name=""
        />
      );
    case "file":
      return (
        <FileInput
          defaultValue={defaultValue}
          onChange={(e: ChangeEventType<HTMLInputElement>) => func(e, row)}
          id=""
          name=""
        />
      );
    case "number":
      return (
        <NumberInput
          defaultValue={defaultValue}
          onChange={(e: ChangeEventType<HTMLInputElement>) => func(e, row)}
          id=""
          name=""
        />
      );
    case "email":
      return (
        <EmailInput
          defaultValue={defaultValue}
          onChange={(e: ChangeEventType<HTMLInputElement>) => func(e, row)}
          id=""
          name=""
        />
      );
    default:
      return <>Wrong Input Type Given</>;
  }
};

/**
 * Function to make button from the btn object.
 * @param {object} btn data object to extract keys from.
 * @param {object} row row object.
 * @returns A JSX Button Element.
 */
const makeButton = <T,>(btn: TableButtonType, row: T): ReactNode => (
  <Button
    classes={btn.classes}
    clickEvent={(e: ClickEventType<HTMLButtonElement>) => btn.click(e, row)}
  >
    {btn.text}
  </Button>
);

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
        return <img src={elm?.toString()} alt="" />;
      case "text":
        return <>{elm?.toString()}</>;
      case "button":
        return (
          <Button
            clickEvent={(e: ClickEventType<HTMLButtonElement>) =>
              header.clickFunction(e, row)
            }
          >
            <>{header.title}</>
          </Button>
        );
      case "input":
        return getInput<T>(
          header.inputType,
          header.changeFunction,
          elm?.toString(),
          row
        );
      case "select":
        return (
          <select
            onChange={(e: ChangeEventType<HTMLSelectElement>) =>
              header.changeFunction(e, row)
            }
          >
            {header.selectOptions.map((op) => (
              <option
                selected={
                  header.defaultCheck &&
                  header.defaultCheck === "text" &&
                  op.text === elm
                    ? true
                    : !!(
                        header.defaultCheck &&
                        header.defaultCheck === "value" &&
                        op.value === elm
                      )
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
 * @returns An array of JSX Elements(tbody>tr>TableCell)
 */
const makeRows = <T,>(
  data: T[],
  headers: TableHeaderType[],
  buttons: TableButtonType[],
  rowOnClick: <D>(data: D) => void
): ReactNode[] =>
  data.map((row) => (
    <TableRow>
      {headers.map((header) => (
        <TableCell
          className={header.classes}
          onClick={() => rowOnClick<T>(row)}
        >
          {getCell<typeof row>(header, row)}
        </TableCell>
      ))}
      {buttons.length
        ? buttons.map((btn) => (
            <TableCell>{makeButton<typeof row>(btn, row)}</TableCell>
          ))
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
    <TableHeader className={header.classes ? header.classes : ""}>
      {header.title}
    </TableHeader>
  ));

/**
 *@summary This hook takes the configuration object and makes a dynamic table in accordance 
  with the configuration, and the data provided.

 *@description Table can have any number of rows and columns.

 * Table can also have buttons, inputs, selects and images as a cell element.

 * Table elements are used from the 'Table.tsx' file.

 * @param {object} tableConfig Configuration object for the table:
 * @field data: object[](data for the rows of table),
 * @field classes?: string(classes for the table),
 * @field rowOnClick?: function(even for the row click),
 * @field headers?: TableHeaderType[](headers for the table),
 * @field buttons?: TableButtonType[](buttons for the table)
 * @returns {object}:
 * @field Table: JSX.Element(DynamicTable),
 * @field Rows: ReactNode[](row elements of table),
 * @field Columns: ReactNode[](header elements of table)
 */
const useDynamicTable = ({
  data,
  headers = [],
  buttons = [],
  classes = "",
  rowOnClick = () => {},
}: TableConfigType) => {
  // eslint-disable-next-line no-param-reassign, react-hooks/rules-of-hooks
  if (!headers.length) headers = useMemo(() => makeHeaders(data[0]), [data]);

  const Rows = useMemo<ReactNode[]>(
    () => makeRows<typeof data[number]>(data, headers, buttons, rowOnClick),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [headers, data, buttons]
  );

  const Columns = useMemo<ReactNode[]>(() => makeColumns(headers), [headers]);

  const DynamicTable = useMemo(
    () => (
      <Table className={classes}>
        <TableHead>{Columns}</TableHead>
        {Rows}
      </Table>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Rows]
  );

  return { Table: DynamicTable, Rows, Columns };
};

export default useDynamicTable;
