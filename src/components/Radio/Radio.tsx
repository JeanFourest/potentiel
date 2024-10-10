import React from 'react';
import './radio.css';

interface RadioProps {
    titre?: string;
    labels: Array<string>;
}

const Radio: React.FC<RadioProps> = ({ titre, labels}) => {
    return (
        <div>
            <h2>{titre}</h2>
            {labels.map((label) => (
                <div>
                    <input type="radio" value={label}/>
                    <label>{label}</label>
                </div>))}
        </div>
    );
}

export default Radio;