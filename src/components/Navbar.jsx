import React from "react";

const Navbar = (props)=>{
    return(
        <div>
        <header className="header fixed-top">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm py-3">
        <div className="container d-flex justify-content-md-center">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link scroll-link" title="About Me" href="#aboutme"><i className="fa fa-user fa-3x"></i><span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll-link" title="Works" href="#works"><i className="fa fa-briefcase fa-3x"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll-link" title="Comments" href="#comments"><i className="fa fa-comments fa-3x"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll-link" title="Contact" href="#contact"><i className="fa fa-envelope fa-3x"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
        </div>
    )
}
export default Navbar;