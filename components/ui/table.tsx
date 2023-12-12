// components/ui/table/table.tsx

import React from 'react';

type TableProps = {
    children: React.ReactNode;
    className?: string;
};

export const Table: React.FC<TableProps> = ({ children, className }) => (
    <table className={`min-w-full ${className}`}>{children}</table>
);

type TableHeadProps = {
    children: React.ReactNode;
};

export const TableHead: React.FC<TableHeadProps> = ({ children }) => (
    <thead className='bg-gray-50'>{children}</thead>
);

type TableRowProps = {
    children: React.ReactNode;
    className?: string;
};

export const TableRow: React.FC<TableRowProps> = ({ children, className }) => (
    <tr className={className}>{children}</tr>
);

type TableHeaderProps = {
    children: React.ReactNode;
    className?: string;
};

export const TableHeader: React.FC<TableHeaderProps> = ({
    children,
    className,
}) => (
    <th
        className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
    >
        {children}
    </th>
);

type TableBodyProps = {
    children: React.ReactNode;
};

export const TableBody: React.FC<TableBodyProps> = ({ children }) => (
    <tbody className='bg-white divide-y divide-gray-200'>{children}</tbody>
);
