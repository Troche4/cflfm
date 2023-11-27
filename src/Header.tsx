import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return <div>
        <div className="navbar">
            <Link to="/" className="link"><img src="./remove-bg.png"/></Link>
        </div>
    </div>
}