import React, { useState } from 'react';
import './radio.css';

interface RadioProps {
    titre?: string;
    labels: Array<string>;
    nameGroup: string;
}

const Radio: React.FC<RadioProps> = ({ titre, labels, nameGroup }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div>
            <h2>{titre}</h2>
            <form action="">
            {labels.map((label, index) => (
                <div key={index}>
                    <input 
                            type="radio" 
                            id={`${nameGroup}-${index}`}
                            name={nameGroup} 
                            value={label} 
                            checked={selectedValue === label} 
                            onChange={handleChange} 
                        />
                    <label htmlFor={`${nameGroup}-${index}`}>{label}</label>
                </div>))}
            </form>
        </div>
    );
}

export default Radio;