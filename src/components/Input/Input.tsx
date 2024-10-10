import React from "react";
import "./Input.css"; // Importation du fichier CSS

type InputProps = {
  label?: string;
  type: "text" | "email" | "password" | "number" | "date";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  name: string; // Ajout de la propriété name pour la gestion des champs
};

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  required = false,
  minLength,
  maxLength,
  disabled = false,
  readOnly = false,
  placeholder = "",
  name, // Récupération du nom
}) => {
  return (
    <div className="input-container">
      {label && <label htmlFor={name}>{label}</label>}{" "}
      {/* Utilisation de htmlFor pour l'accessibilité */}
      <input
        id={name} // Ajout d'un id pour l'accessibilité
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        name={name} // Attribution du nom à l'input
      />
      {/* Affichage du message d'erreur si le champ est requis et vide */}
      {required && !value && (
        <span className="error-message">Ce champ est requis</span>
      )}
    </div>
  );
};

export default Input;
