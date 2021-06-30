import React, { useState } from "react";

const Navbar = (props) => {
  const [navbarList, SetNavbarList] = useState({
    aboutMe: "",
    work: "",
    comment: "",
    contact: "",
  });
  const changeLinkContent = () => {
    if (navbarList.aboutMe === "") {
      SetNavbarList({
        aboutMe: "About Me",
        work: "My Works",
        comment: "Comments",
        contact: "Contact",
      });
    } else {
      SetNavbarList({
        aboutMe: "",
        work: "",
        comment: "",
        contact: "",
      });
    }
  };
  return (
    <div className="">
      <header className=" header fixed-top p-0 m-0">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm py-3 justify-content-sm-center">
          <div className="">
            <button
              onClick={changeLinkContent}
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="p-3 navbar-nav ml-auto">
                <li className="nav-item active">
                  <a
                    className="nav-link scroll-link"
                    title="About Me"
                    href="#aboutme"
                  >
                    <i className="fa fa-user fa-3x"> {navbarList.aboutMe}</i>
                    <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link scroll-link"
                    title="Works"
                    href="#works"
                  >
                    <i className="fa fa-briefcase fa-3x"> {navbarList.work}</i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link scroll-link"
                    title="Comments"
                    href="#comments"
                  >
                    <i className="fa fa-comments fa-3x">
                      {" "}
                      {navbarList.comment}
                    </i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link scroll-link"
                    title="Contact"
                    href="#contact"
                  >
                    <i className="fa fa-envelope fa-3x">
                      {" "}
                      {navbarList.contact}
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
