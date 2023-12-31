import React, { FC } from "react";
import { TableHeadProps } from "@/types";

export const TableHead: FC<TableHeadProps> = ({ children }) => (
  <thead className="bg-gray-50">{children}</thead>
);
