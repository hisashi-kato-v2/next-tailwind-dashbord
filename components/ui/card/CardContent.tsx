import React, { FC } from "react";
import { CardContentProps } from "@/types";

export const CardContent: FC<CardContentProps> = ({ children, className }) => {
  const combinedClassName = `p-4 ${className}`;
  return <div className={combinedClassName}>{children}</div>;
};
