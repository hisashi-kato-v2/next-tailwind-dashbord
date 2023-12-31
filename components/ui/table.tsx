import React, { FC } from "react";
import {
  TableBodyProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from "@/types";

export const Table: FC<TableProps> = ({ children, className }) => (
  <table className={`min-w-full ${className}`}>{children}</table>
);

export const TableHead: FC<TableHeadProps> = ({ children }) => (
  <thead className="bg-gray-50">{children}</thead>
);

export const TableRow: FC<TableRowProps> = ({ children, className }) => (
  <tr className={className}>{children}</tr>
);

export const TableHeader: FC<TableHeaderProps> = ({ children, className }) => (
  <th
    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
  >
    {children}
  </th>
);

export const TableBody: FC<TableBodyProps> = ({ children }) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);
