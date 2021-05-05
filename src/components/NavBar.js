import React from "react";
import { Link } from "react-router-dom";
import Menu from "../menu.png";
import "./styles.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm" id="nav">
        <div className="container">
          <Link to="./" className="navbar-brand text-danger">
            News<span style={{ color: "chocolate" }}>API</span>
          </Link>
          <button
            id="btnBar"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={Menu} alt="menu" />
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="./" className="nav-link mr-2 pl-2">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="./news" className="nav-link mr-2 pl-2">
                  News
                </Link>
              </li>
            </ul>
          </div>
          {/* MOBILE VIEW */}
          <div className="mobile__navbar">
            <p>
              <Link to="./" className="nav-link mr-2 pl-2">
                Home
              </Link>
            </p>
            <p>
              <Link to="./news" className="nav-link mr-2 pl-2">
                News
              </Link>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
