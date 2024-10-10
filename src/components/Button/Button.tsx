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
    const isLeft = extraClass.includes('left');
  const isRight = extraClass.includes('right');
  return (
    <button onClick={onClick} className={`buttonStyle ${extraClass}`} disabled={disabled} >
      { icon && text && isLeft ? <span>{icon} {text}</span> : icon && text && isRight ? <span>{text} {icon}</span> : icon ? icon : text }
    </button>
  );
};

export default Button;