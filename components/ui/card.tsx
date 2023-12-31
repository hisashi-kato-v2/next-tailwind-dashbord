import React, { FC } from "react";
import {
  CardProps,
  CardContentProps,
  CardHeaderProps,
  CardTitleProps,
} from "@/types";

export const Card: FC<CardProps> = ({ children, className }) => {
  const combinedClassName = `border rounded overflow-hidden ${className}`;
  return <div className={combinedClassName}>{children}</div>;
};

export const CardHeader: FC<CardHeaderProps> = ({ children, className }) => {
  const combinedClassName = `bg-gray-200 p-4 ${className}`;
  return <div className={combinedClassName}>{children}</div>;
};

export const CardContent: FC<CardContentProps> = ({ children, className }) => {
  const combinedClassName = `p-4 ${className}`;
  return <div className={combinedClassName}>{children}</div>;
};

export const CardTitle: FC<CardTitleProps> = ({ children, className }) => {
  const combinedClassName = `text-lg font-semibold ${className}`;
  return <h2 className={combinedClassName}>{children}</h2>;
};
