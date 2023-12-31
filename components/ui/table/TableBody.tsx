import React, { FC } from "react";
import { TableBodyProps } from "@/types";

export const TableBody: FC<TableBodyProps> = ({ children }) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);
