import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg  fw-bold  " id="head">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img  src="assets/logo.png" alt=" " width={150} />

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon  " />
        </button>
        <div className="collapse navbar-collapse text-dark " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="#">
                Home page
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active " href="#">
                Blog 
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active  " href="#">
                Pages
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active " href="#">
                Menu
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active " href="#">
                Location
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link active ">Contact us  </a>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  );
}
