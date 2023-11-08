import React from "react";
import { Link } from "react-router-dom";

export default function ActionButton() {
    return <div className="actionButton">
        <Link to={"/bio"} className="link">Click Here to Meet the Coach</Link>
    </div>
}