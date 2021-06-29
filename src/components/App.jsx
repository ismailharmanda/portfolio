import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import About from "./About";
import Works from "./Works";
import "../css/App.css"

const App = ()=>{
    return(
        <div className="">
        <Navbar />
        <Section />
        <About />
        <Works />
        </div>
    )
}
export default App;
