import React from "react";
import { Link } from "react-router-dom";
import {Navigation} from "./Navigation";
const logo = require("../images/logo.png");

export const Header = () => {
    return (
      <header>
        <div className="header-container">
            <Link to="/">
              <img src={logo} className="logo" alt="Cookie Factory Logo"/>
            </Link>
            <h1>Cookie Factory</h1>
        </div>
        <Navigation />
      </header>
    );
  };