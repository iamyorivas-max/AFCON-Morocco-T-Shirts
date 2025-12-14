import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-morocco-red hover:bg-red-800 focus:ring-morocco-red",
    secondary: "border-transparent text-white bg-morocco-green hover:bg-green-800 focus:ring-morocco-green",
    outline: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:ring-indigo-500",
    whatsapp: "border-transparent text-white bg-[#25D366] hover:bg-[#128C7E] focus:ring-green-500"
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};