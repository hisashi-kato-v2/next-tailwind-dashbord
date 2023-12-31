import React, { FC } from "react";
import { CardProps } from "@/types";

export const Card: FC<CardProps> = ({ children, className }) => {
  const combinedClassName = `border rounded overflow-hidden ${className}`;
  return <div className={combinedClassName}>{children}</div>;
};
