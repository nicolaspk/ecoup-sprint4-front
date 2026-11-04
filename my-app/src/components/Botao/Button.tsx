import { Link } from 'react-router-dom';
import React from 'react';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function Button({ to, onClick, children, className = '', disabled = false }: ButtonProps) {
  const baseClass = `inline-block bg-[#00f5c8] text-[#050816] py-[12px] px-[30px] font-bold rounded-[30px] border-none text-center uppercase tracking-[1px] hover:bg-[#00ddb3] ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  if (to) {
    return <Link to={to} className={baseClass}>{children}</Link>;
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseClass}>
      {children}
    </button>
  );
}