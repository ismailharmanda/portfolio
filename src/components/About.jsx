import React from "react";

import profilePhoto from "../img/veribox1.png"

const About = () => {
  return (
    <div className="row">
      <section className="" id="aboutme" name="about">
        <div id="intro">
          <div className="">
            <div className="p-5 row align-items-center justify-content-lg-center">
              <div className="col-lg-3 d-flex justify-content-center ">
                <h5 className="h1 text-light">ABOUT ME</h5>
              </div>
              <div className="col-lg-6 text-light">
                <p>
                  Hi there✋. I am an eager and hardworker developer. My main
                  career goal is to learn every day. I really want to learn and
                  to progress in my career. Programming requires constant
                  learning and improving.
                </p>
              </div>
              <div className="col-lg-3 justify-content-center text-center">
                <img style={{width:"100%"}} src={profilePhoto} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
