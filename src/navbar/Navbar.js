import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";


const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "why-us", label: "About Us" },
    { to: "our-service", label: "Service" },
    { to: "contact", label: "Contact Us" },
  ];

  const renderNavLinks = () =>
    navLinks.map((link, index) => (
      <li className="nav-item" key={index}>
        <Link
          to={link.to}
          spy={true}
          smooth={true}
          offset={-110}
          duration={100}
        >
          <span className="nav-link">{link.label}</span>
        </Link>
      </li>
    ));

  return (
    <div className="container custom mt-5 mb-5 d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link to="home" spy={true} smooth={true} offset={-110} duration={100}>
            <img
              src={`${process.env.PUBLIC_URL}/images/v.png`}
              style={{ width: "100px", height: "50px" }}
              alt="Company Logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            onClick={() => setIcon(!icon)}
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className={`fa-solid ${icon ? "fa-x" : "fa-bars"}`}></i>
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${icon ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">{renderNavLinks()}</ul>

          


          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
