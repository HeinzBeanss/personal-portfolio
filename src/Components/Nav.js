import React from "react";
import { Link } from "react-scroll";
import "../CSS/Nav.css"

const Nav = () => {

    return (
        <nav className="navbarcontainer">
            <h1 className="navtitle">David Bean</h1>
            <ul className="navlinks">
                <Link activeClass="active" smooth spy to={"About"}><li className="navitem">About</li></Link>
                <Link activeClass="active" smooth spy to={"TechStack"}><li className="navitem">Tech Stack</li></Link>
                <Link activeClass="active" smooth spy to={"Projects"}><li className="navitem">Projects</li></Link>
                <Link activeClass="active" smooth spy to={"Contact"}><li className="navitem">Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;