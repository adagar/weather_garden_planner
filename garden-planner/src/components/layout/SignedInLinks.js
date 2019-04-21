import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Add Plant</NavLink>
      </li>
      <li>
        <NavLink to="/">Sign Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue lighten-4">
          Profile
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
