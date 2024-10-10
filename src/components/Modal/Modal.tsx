import React from 'react';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    title?: string;
    imgUrl?: string;
    content?: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, content, imgUrl, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <img src={imgUrl} className='modal-img'/>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <div className="modal-content">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;