// components/ui/card/Card.tsx

import React from 'react';

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
    const combinedClassName = `border rounded overflow-hidden ${className}`;
    return <div className={combinedClassName}>{children}</div>;
};

type CardHeaderProps = {
    children: React.ReactNode;
    className?: string;
};

export const CardHeader: React.FC<CardHeaderProps> = ({
    children,
    className,
}) => {
    const combinedClassName = `bg-gray-200 p-4 ${className}`;
    return <div className={combinedClassName}>{children}</div>;
};

type CardContentProps = {
    children: React.ReactNode;
    className?: string;
};

export const CardContent: React.FC<CardContentProps> = ({
    children,
    className,
}) => {
    const combinedClassName = `p-4 ${className}`;
    return <div className={combinedClassName}>{children}</div>;
};

type CardTitleProps = {
    children: string;
    className?: string;
};

export const CardTitle: React.FC<CardTitleProps> = ({
    children,
    className,
}) => {
    const combinedClassName = `text-lg font-semibold ${className}`;
    return <h2 className={combinedClassName}>{children}</h2>;
};
