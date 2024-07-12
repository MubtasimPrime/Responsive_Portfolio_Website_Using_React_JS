import "./FooterStyles.css";

import React from 'react';
import { FaHome } from "react-icons/fa";

const footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome />
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default footer
