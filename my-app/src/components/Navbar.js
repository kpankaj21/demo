import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <ul className="navbar mr-auto">
          <li className="nav-link">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
        </ul>

        <ul className="navbar mr-auto">
          <li className="nav-link">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
        <ul className="navbar mr-auto">
          <li className="nav-link">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
