/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode } from "react";

type BasePropTypes = {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  className?: string;
};

/**
 * <table>
 */
export function Table({ children, className = undefined }: BasePropTypes) {
  return <table className={className}>{children}</table>;
}

/**
 * <tbody><tr>
 */
export function TableRow({ children, className = undefined }: BasePropTypes) {
  return (
    <tbody className={className}>
      <tr>{children}</tr>
    </tbody>
  );
}
/**
 * <thead><tr>
 */
export function TableHead({ children, className = undefined }: BasePropTypes) {
  return (
    <thead className={className}>
      <tr>{children}</tr>
    </thead>
  );
}

/**
 * <td>
 */
export function TableCell({
  children,
  className = undefined,
  onClick = () => {},
}: // eslint-disable-next-line react/require-default-props
{ onClick?: () => void } & BasePropTypes) {
  return (
    <td onClick={onClick} className={className}>
      {children}
    </td>
  );
}

/**
 * <th>
 */
export function TableHeader({
  children,
  className = undefined,
}: BasePropTypes) {
  return <th className={className}>{children}</th>;
}
