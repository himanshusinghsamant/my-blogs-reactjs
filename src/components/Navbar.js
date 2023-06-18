import React from "react";
import { NavLink } from "react-router-dom";
import '../components/Navbar.style.css'

const Navbar = () => {
  return (
    <div>
      <nav className="nav-style fixed-top navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink to={"/"} className="icon-txt-style navbar-brand">
            MY/Blogs
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
              <NavLink to={"/news"} className="txt-style nav-link mx-3">
                News
              </NavLink>
              <NavLink to={"/jobs"} className="txt-style nav-link  mx-3">
                Jobs
              </NavLink>
              <NavLink to={"/upcomingupdates"} className="txt-style nav-link  mx-3">
                UpComing Updates
              </NavLink>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
