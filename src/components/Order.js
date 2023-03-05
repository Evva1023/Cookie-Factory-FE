import React from "react";
import { Link } from "react-router-dom";

export const Order = () => {
    return (
        <>
        <h2>Choose your favourite ingredients and order your cookie</h2>
        <Link to="/"><button>Go back to home page</button></Link>
        <Link to="/summary"><button>Order now</button></Link>
        </>
    );
};