import React, { FC } from "react";
import { TableHeaderProps } from "@/types";

export const TableHeader: FC<TableHeaderProps> = ({ children, className }) => (
  <th
    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
  >
    {children}
  </th>
);
