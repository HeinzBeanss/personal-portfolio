import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Nav.css"

const Nav = () => {

    return (
        <nav className="navbarcontainer">
            <h1 className="navtitle">David Bean</h1>
            <ul className="navlinks">
                {/* <Link to={"/#About"}><li className="navitem">About</li></Link>
                <Link to={"/#TechStack"}><li className="navitem">Tech Stack</li></Link>
                <Link to={"/#Projects"}><li className="navitem">Projects</li></Link>
                <Link to={"/#Contact"}><li className="navitem">Contact</li></Link> */}
            </ul>
        </nav>
    )
}

export default Nav;