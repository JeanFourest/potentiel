import React from 'react';
import './Modal.css';

/*
 * Propriétées du composant Modal
 */
interface ModalProps {
    isOpen: boolean;
    title?: string;
    imgUrl?: string;
    content?: string;
    onClose: () => void;
}

/*
 * Composant Modal
 */
const Modal: React.FC<ModalProps> = ({ isOpen, title, content, imgUrl, onClose }) => {
    if (!isOpen) return null;

    /*
    * Rendu du composant
    */
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className='modal-fit'>
                    <button className="close-button" onClick={onClose}>×</button>
                    <div className="modal-header">
                        <img src={imgUrl} className='modal-img'/>
                    </div>
                    <div className="modal-content">
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;