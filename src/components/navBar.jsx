import React from "react";
import logo from "../logo2.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            // src="https://bootstrapious.com/i/snippets/sn-nav-logo/logo.png"
            src={logo}
            alt=""
            className="d-inline-block align-middle mr-2"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Offers
            </a>
            <a className="nav-link" href="#">
              Our Products
            </a>
            <a className="nav-link" href="#">
              Location
            </a>
            <a className="nav-link" href="#">
              Request a quotation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
