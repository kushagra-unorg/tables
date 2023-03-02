import { ReactNode } from "react";

type basePropTypes = {
  children: ReactNode;
  classes?: string;
};

/**
 * <table>
 */
export function Table({ children, classes = undefined }: basePropTypes) {
  return <table className={classes}>{children}</table>;
}

/**
 * <tbody><tr>
 */
export function TableRow({ children, classes = undefined }: basePropTypes) {
  return (
    <tbody className={classes}>
      <tr>{children}</tr>
    </tbody>
  );
}
/**
 * <thead><tr>
 */
export function TableHead({ children, classes = undefined }: basePropTypes) {
  return (
    <thead className={classes}>
      <tr>{children}</tr>
    </thead>
  );
}

/**
 * <td>
 */
export function TableCell({ children, classes = undefined }: basePropTypes) {
  return <td className={classes}>{children}</td>;
}

/**
 * <th>
 */
export function TableHeader({ children, classes = undefined }: basePropTypes) {
  return <th className={classes}>{children}</th>;
}
