// components/ui/button.tsx

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, onClick }) => {
  const baseStyle = 'px-4 py-2 rounded focus:outline-none focus:shadow-outline';
  const variantStyle = variant === 'primary' 
    ? 'bg-blue-500 hover:bg-blue-700 text-white'
    : 'bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent';

  const combinedClassName = `${baseStyle} ${variantStyle} ${className}`;

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
