import React from 'react';
import './button.css';


interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  extraClass: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, icon, extraClass, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} className={`buttonStyle ${extraClass}`} disabled={disabled} >
      {icon ? icon : text}
    </button>
  );
};

export default Button;