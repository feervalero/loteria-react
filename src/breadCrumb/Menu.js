import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/products">products</Link>
            </li>
            <li>
            <Link to="/productDetail">ProductDetail</Link>
            </li>
            <li>
            <Link to="/productDetail/:message">ProductDetail</Link>
            </li>
        </ul>
    );
}

export default Menu;