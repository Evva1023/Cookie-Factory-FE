import React from "react";
import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/order"><button>Order</button></Link>
        </nav>
    );
};