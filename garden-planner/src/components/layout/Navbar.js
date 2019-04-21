import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavBar = () => {
  return (
    <nav className="nav-wrapper green darken-3">
      <div className="container">
        <BrowserRouter>
          <Link to="/" className="brand-logo">
            Garden Planner
          </Link>
          <SignedInLinks />
          <SignedOutLinks />
        </BrowserRouter>
      </div>
    </nav>
  );
};

export default NavBar;
