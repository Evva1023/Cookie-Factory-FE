import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
        <h2>Make yourself a big cookie with ingredients you love</h2>
        <Link to="/order"><button>Click here to make your cookie</button></Link>
        </>
    );
};