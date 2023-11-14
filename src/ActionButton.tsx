import React from "react";
import { Link } from "react-router-dom";

export default function ActionButton() {
    return<Link to={"/bio"} className="link"><div className="actionButton">Meet the Coach</div></Link>
}