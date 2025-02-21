import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NewsBoard from "./NewsBoard";
const Navbar = ({ handleNewsType }) => {
  const categories = [
    "General",
    "Sports",
    "Health",
    "Business",
    "Entertainment",
    "Science",
    "Technology",
  ];


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand btn btn-light dark"
            style={{ color: "black", fontWeight: "600" }}
            href="#"
          >
            NewsMag
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            {categories.map((cat) => (
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"
                        onClick={() => handleNewsType(cat)} >
                  {cat}
                </a>
              </li>))}
  
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News Type
                </a>
                <ul className="dropdown-menu">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleNewsType(cat)}
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
