import React from 'react';
import './select.css';

/*
 * Propriétées du composant Select
 */
interface Option {
  value: string | number;
  label: string;
}

interface BaseProps {
  options: Option[];
  disabled?: boolean;
  className?: string;
  size?: number | never;
  onChange: (value: string | string[]) => void;
}

interface MultipleProps extends BaseProps {
  multiple: true;
}

interface SingleProps extends BaseProps {
  multiple?: false;
}

type SelectComponentProps = MultipleProps | SingleProps;

/*
 * Composant Select
 */
const SelectComponent: React.FC<SelectComponentProps> = (props) => {

  const { options, onChange, disabled } = props;
  const className = props.className || 'select';
  const multiple = props.multiple || false;
  const size = multiple ? props.size : undefined;

  /*
  * Fonction pour gérer le changement de valeur
  */
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );
    onChange(multiple ? selectedOptions : selectedOptions[0]);
  };

  /*
  * Rendu du composant
  */
  if (disabled) {
    return (

        <div className="container-row">
          <select className={className} multiple={multiple} size={size} onChange={handleChange} disabled>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

    );
  } else {
    return (
      
        <div className="container-row">
          <select className={className} multiple={multiple} size={size} onChange={handleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

    );
  }
};

export default SelectComponent;
