import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link className="float-left" to="/">
              <img
                src="img/logo_euro_2020.png"
                alt="logo"
                style={{ width: "85px" }}
                className="thumbnail"
              />
            </Link>
            <div className="float-right">
              Copyrights &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
