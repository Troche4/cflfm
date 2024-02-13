import React from "react";
import { Link } from "react-router-dom";

interface ActionButtonProps {
    title: string;
    link: string;
}

export default function ActionButton({title, link}: ActionButtonProps) {
    return<Link to={link} className="link"><div className="actionButton">{title}</div></Link>
}