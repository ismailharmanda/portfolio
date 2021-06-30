import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import About from "./About";
import Works from "./Works";
import "../css/App.css";
import Comment from "./Comment";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Section />
      <About />
      <Works />
      <Comment />
      <Footer />
    </div>
  );
};
export default App;
