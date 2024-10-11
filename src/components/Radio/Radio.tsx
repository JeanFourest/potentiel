import React, { useState } from 'react';
import './radio.css';

/*
 * Propriétées du composant Radio
 */
interface RadioProps {
    titre?: string;
    labels: Array<string>;
    nameGroup: string;
}

/*
 * Composant Radio
 */
const Radio: React.FC<RadioProps> = ({ titre, labels, nameGroup }) => {

    /*
    * État du composant
    */
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    /*
    * Fonction pour gérer le changement de valeur
    */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    /*
    * Rendu du composant
    */
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