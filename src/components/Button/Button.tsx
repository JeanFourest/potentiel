import React from 'react';
import './button.css';

/*
 * Propriétées du composant Button
 */
interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  extraClass: string;
  onClick?: () => void;
  disabled?: boolean;
}

/*
 * Composant Button
 */
const Button: React.FC<ButtonProps> = ({ text, icon, extraClass, onClick, disabled = false }) => {

    /*
    * Vérification de la position de l'icone
    */
    const isLeft = extraClass.includes('left');
    const isRight = extraClass.includes('right');

    /*
    * Rendu du composant
    */
    return (
      <button onClick={onClick} className={`buttonStyle ${extraClass}`} disabled={disabled} >
        { icon && text && isLeft ? <span>{icon} {text}</span> : icon && text && isRight ? <span>{text} {icon}</span> : icon ? icon : text }
      </button>
    );
};

export default Button;