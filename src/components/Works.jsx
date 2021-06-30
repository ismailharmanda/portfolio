import React from "react";
import youtubeClone from "../img/youtube-clone.png";
import widgets from "../img/widgets.png";

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
          <div className="col-md-6 col-12">
            <div className="card text-dark fw-bold">
              <a
                href="https://clone-youtube-app.vercel.app/"
                alt="Youtube Clone App"
              >
                <img src={youtubeClone} className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <p className="card-text text-center">
                  A video site that I made with React, using Youtube Api. You
                  can visit my site by just clicking.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card text-dark fw-bold">
              <a href="https://widgets-ismail.vercel.app/" alt="Widgets App">
                <img src={widgets} className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <p className="card-text text-center">
                  A website which has been made via React with various widgets
                  in it. (Translate works with only localhost:3000)
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
