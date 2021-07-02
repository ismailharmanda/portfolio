import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="" id="contact">
      <footer className="p-5 mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="text-center col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4>My Works</h4>
                  <ul className="p-4 list-unstyled">
                    <li>
                      <a
                        name="Youtube Clone"
                        href="https://clone-youtube-app.vercel.app/"
                      >
                        Youtube Clone
                      </a>
                    </li>
                    <li>
                      <a
                        name="Widgets App"
                        href="https://widgets-ismail.vercel.app/"
                      >
                        Widgets App
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4>Web Site Map</h4>
                  <ul className="p-4 list-unstyled">
                    <li>
                      <a name="About Me" href="#aboutme">
                        About Me
                      </a>
                    </li>
                    <li>
                      <a name="My Previous Works" href="#works">
                        My Previous Works
                      </a>
                    </li>
                    <li>
                      <a name="Comments" href="#comments">
                        Comments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4>Contact Me</h4>
                  <ul className=" p-4 list-unstyled">
                    <li>
                      <a name="call me" href="tel:+905325243011">
                        <i className="fa fa-phone fa-2x">
                          &nbsp;&nbsp; Call Me
                        </i>
                      </a>
                    </li>
                    <br />
                    <li>
                      <a name="email" href="mailto:iharmanda@hotmail.com">
                        <i className="fa fa-envelope fa-2x">
                          &nbsp;&nbsp;&nbsp; E-mail
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center col-md-3">
                <h4>Follow Me</h4>
                <ul style={{ listStyleType: "none" }} className="list-inline">
                  <li className="p-3 list-inline-item">
                    <a
                      title="LinkedIn"
                      href="https://www.linkedin.com/in/ismail-harmanda/"
                    >
                      <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                  </li>
                  <li className="p-3 list-inline-item">
                    <a title="GitHub" href="https://github.com/ismailharmanda">
                      <i className="fab fa-github fa-3x"></i>
                    </a>
                  </li>
                  <li className="p-3 list-inline-item">
                    <a
                      title="Twitter"
                      href="https://twitter.com/ismail_harmanda"
                    >
                      <i className="fab fa-twitter fa-3x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  &copy; Copyright 2021 - İsmail Harmanda. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
