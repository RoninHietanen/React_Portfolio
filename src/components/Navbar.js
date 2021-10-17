import React from 'react';
import './style.css';

function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <a>Portfolio: Ronin Hietanen</a>
            </div>

            <div className="navbar-items">
                <a className="navbar-item" href="#about-me">About Me |</a>
                <a className="navbar-item" href="#my-work">Work Samples |</a>
                <a className="navbar-item" href="#contact-me">Contact Me |</a>
                <a className="navbar-item" href="#resume">Resume</a>
            </div>
        </nav>
    );
}

export default Navbar;