import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import About from "./About";
import "../css/App.css"

const App = ()=>{
    return(
        <div className="container-fluid p-0">
        <Navbar />
        <Section />
        <About />
        </div>
    )
}
export default App;
