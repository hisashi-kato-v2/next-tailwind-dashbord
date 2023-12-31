import React, { FC } from "react";
import { TableProps } from "@/types";

export const Table: FC<TableProps> = ({ children, className }) => (
  <table className={`min-w-full ${className}`}>{children}</table>
);
