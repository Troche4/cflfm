import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return <div>
        <div className="navbar">
            <div className="logo"><Link to="/" className="link">LOGO</Link></div>
            <Link to="/" className="link">Coaching for Law Firm Managers</Link>
            <div/>
        </div>
    </div>
}