import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.jpg";
const Navbar = () => {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg bg-light">
        <div class="container">
          <Link class="navbar-brand" href="#">
            <div className="rounded-circle">
              <img
                src={Logo}
                width="50px"
                alt="Logo "
                className="rounded-circle"
              />
            </div>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0 fw-bold">
              <li class="nav-item">
                <Link class="nav-link  " aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Our Services 
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  About Us
                </Link>
              </li>   <li class="nav-item">
                <Link class="nav-link" href="#">
                  Contact Us
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
