import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillTwitterCircle,
  AiFillApple,
  AiFillMedicineBox,
  AiFillMediumCircle,
} from "react-icons/ai";
import {TiSocialTwitterCircular,TiSocialGithubCircular,TiSocialFacebookCircular} from "react-icons/ti"

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg   " id="nav12">
        <div className="container">
          
            <p>EN</p>
           

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span /> en
          </button>
          <div
            className="collapse navbar-collapse text-dark "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link className="nav-link active  " to="/technology">
                  LightPaper
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active  " to="/community">
                  whitepaper
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active  " to="/about">
                  wiki
                </Link>
              </li>
              <li className="nav-item pt-1">
                <TiSocialTwitterCircular size={25} />

                <TiSocialGithubCircular size={25} />
                <TiSocialFacebookCircular size={25} />
               

              </li>
              <li className="text-dark mb-3 px-2 py-1 border border-dark rounded-5">
              <a className="text-dark text-decoration-none  " href="">support</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg  fw-bold  " id="head">
        <div className="container border-top">
          <Link className="navbar-brand" to="/#">
            <img src="assets/logo.png" alt=" " width={150} />
          </Link>
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
          <div
            className="collapse navbar-collapse text-dark "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active " to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active  " to="/community">
                  Community
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active  " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active " to="/blog">
                  Blog
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link active " to="/build">
                  Build
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link active " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
