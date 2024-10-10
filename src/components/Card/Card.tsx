import React from 'react';
import './card.css';
import Button from '../Button/Button';

interface CardProps {
    titre?: string;
    imageUrl?: string;
    description?: string;
    actionText?: string;
    extraClass?: string;
    onActionClick?: () => void;
}

const Card: React.FC<CardProps> = ({ titre, imageUrl, description, actionText, extraClass, onActionClick }) => {
    return (
        <div className={`card ${extraClass}`}>
            <img src={imageUrl} alt="Card Image" className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{titre}</h2>
                <p className="card-description">{description}</p>
                <Button text={actionText} onClick={onActionClick} extraClass='outline-primary' />
            </div>
        </div>
    );
};

export default Card;