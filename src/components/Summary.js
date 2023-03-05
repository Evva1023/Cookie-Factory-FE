import React from "react";
import { Link } from "react-router-dom";

export const Summary = () => {
    return (
        <>
        <h2>Thank you! Starting to bake your cookie...</h2>
        <Link to="/"><button>Go back to home page</button></Link>
        </>
    );
};