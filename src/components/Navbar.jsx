import React from "react";

const Navbar = () => {
  return (
    <div className="w-100">
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Veronica Gatica
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
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Projects
              </a>
              <a className="nav-link" href="#">
                About me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
