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
            <form action="">
            {labels.map((label) => (
                <div>
                    <input type="radio" name="radio" value={label}/>
                    <label>{label}</label>
                </div>))}
            </form>
        </div>
    );
}

export default Radio;