import React, { FC } from "react";
import { TableRowProps } from "@/types";

export const TableRow: FC<TableRowProps> = ({ children, className }) => (
  <tr className={className}>{children}</tr>
);
