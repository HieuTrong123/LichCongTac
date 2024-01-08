// Popup.js

import React from 'react';
import './Popup.css'
const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};

export default Popup;
