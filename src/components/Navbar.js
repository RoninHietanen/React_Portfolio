import React from 'react';
import './style.css';

function Navbar () {
    return (
        <nav className="navbar">
            <div >
                <h1 className="navbar-title">Portfolio: Ronin Hietanen</h1>
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