import React from 'react';
import './radio.css';

interface RadioProps {
    titre: string;
    label: string;
    number: number;
}

const Radio: React.FC<RadioProps> = ({ titre, label, number}) => {
    return (
        <div>
            <h1>{titre}</h1>
            <label>{label}</label>
            <input type="radio" />
        </div>
    );
}

export default Radio;