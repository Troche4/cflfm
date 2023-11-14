import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return <div>
        <div className="navbar">
            <div className="logo"><Link to="/" className="link"></Link></div>
            <Link to="/" className="linkBanner"><div>Coaching for</div><div>Law Firm Managers</div></Link>
            <div/>
        </div>
    </div>
}