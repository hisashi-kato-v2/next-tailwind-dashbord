import React, { FC } from "react";
import { CardHeaderProps } from "@/types";

export const CardHeader: FC<CardHeaderProps> = ({ children, className }) => {
  const combinedClassName = `bg-gray-200 p-4 ${className}`;
  return <div className={combinedClassName}>{children}</div>;
};
