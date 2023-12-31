import React, { FC } from "react";
import { CardTitleProps } from "@/types";

export const CardTitle: FC<CardTitleProps> = ({ children, className }) => {
  const combinedClassName = `text-lg font-semibold ${className}`;
  return <h2 className={combinedClassName}>{children}</h2>;
};
