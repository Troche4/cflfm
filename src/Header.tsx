import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return <div>
        <div className="navbar">
            <div className="logo"><Link to="/" className="link"><img src="./logo.jpg"/></Link></div>
        </div>
    </div>
}