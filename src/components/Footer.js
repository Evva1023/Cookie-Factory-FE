import React from "react";
const logo = require("../images/logo.png");

export const Footer = () => {
    return (
        <footer>
            <img src={logo} className="logo-small" alt="Cookie Factory Logo"/>
            <p>&copy;2023 Cookie Factory</p>
        </footer>
    );
};