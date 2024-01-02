import React, { FC } from "react";
import { ButtonProps } from "@/types";

export const PrimaryButton: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  onClick,
}) => {
  const baseStyle = "px-4 py-2 rounded focus:outline-none focus:shadow-outline";
  const variantStyle =
    variant === "primary"
      ? "bg-blue-500 hover:bg-blue-700 text-white"
      : "bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent";

  const combinedClassName = `${baseStyle} ${variantStyle} ${className}`;

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};
