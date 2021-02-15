import React from "react";
import logoImg from "./assets/images/logo.svg";
import Search from "../search";
import "./assets/scss/header.scss";
export default function Index() {
  return (
    <div className="header-wrapper bg-white">
      <div className="container-fluid px-5">
        <div className="row py-4 align-items-center">
          <div className="col-md-2 col-sm-2">
            <a href="#">
              <img src={logoImg} alt="logo" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-7 col-sm-6 search-column">
            <Search />
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="auth-menu float-right">
              <ul>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Sign In</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
