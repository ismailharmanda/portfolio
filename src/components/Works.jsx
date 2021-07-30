import React from "react";
import youtubeclone from "../img/youtubeclone.gif";
import widgets from "../img/widgets.gif";
import expenses from "../img/Expenses.gif";
import serdanismanlik from "../img/serdanismanlik.gif";

const Works = () => {
  return (
    <div>
      <section
        className="bg-dark bg-gradient text-light row py-5 align-items-center justify-content-center"
        id="works"
      >
        <div className="d-flex py-5 row text-center align-items-center">
          <div className="col-12">
            <h2 className="h1 mb-4">My Previous Works</h2>
          </div>
        </div>
        <div className="d-flex row align-items-center justify-content-around">
          <div className="p-1 col-md-6 col-12">
            <div className="card text-dark fw-bold">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://case-ser.netlify.app/"
                alt="Ser Danışmanlık"
              >
                <img
                  src={serdanismanlik}
                  className="card-img-top"
                  alt="Ser Danışmanlık"
                />
              </a>
              <div className="card-body">
                <p className="card-text text-center">
                  An introductory page I made for a corporate company.
                </p>
              </div>
            </div>
          </div>
          <div className="p-1 col-md-6 col-12">
            <div className="card text-dark fw-bold">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://clone-youtube-app.vercel.app/"
                alt="Youtube Clone App"
              >
                <img
                  src={youtubeclone}
                  className="card-img-top"
                  alt="youtube clone"
                />
              </a>
              <div className="card-body">
                <p className="card-text text-center">
                  A video site that I made with React, using Youtube Api. You
                  can visit my site by just clicking.
                </p>
              </div>
            </div>
          </div>
          <div className="p-1 col-md-6 col-12">
            <div className="card text-dark fw-bold">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://widgets-ismail.vercel.app/"
                alt="Widgets App"
              >
                <img src={widgets} className="card-img-top" alt="widgets" />
              </a>
              <div className="card-body">
                <p className="card-text text-center">
                  A website which has been made via React with various widgets
                  in it. (Translate works with only lh:3000)
                </p>
              </div>
            </div>
          </div>
          <div className="p-1 col-md-6 col-12">
            <div className="card text-dark fw-bold">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://expensess.netlify.app/"
                alt="Expenses App"
              >
                <img src={expenses} className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <p className="card-text text-center">
                  An application to keep track of spending expenses via React.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Works;
