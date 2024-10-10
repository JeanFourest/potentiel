import React from 'react';
import './select.css';

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

const SelectComponent: React.FC<SelectComponentProps> = (props) => {
  const { options, onChange, disabled } = props;
  const className = props.className || 'select';
  const multiple = props.multiple || false;
  const size = multiple ? props.size : undefined;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );
    onChange(multiple ? selectedOptions : selectedOptions[0]);
  };

  if (disabled) {
    return (

        <div className="container">
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
      
        <div className="container">
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
