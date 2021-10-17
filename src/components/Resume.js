import React from 'react';
import './resume-style.css';
import resume from "./assets/other/Resume - Ronin Hietanen.pdf";

function Resume () {
    return (
        <div className="column">
            
            <h6 className="resume-title" id="resume">Resume</h6>
           
            <div className="content">
                Here's a link to a downloadable .pdf copy of my current resume:
                <p><a className="pdf" href={resume}>Resume - Ronin Hietanen</a></p>
            </div>
                
        </div>
    );
}

export default Resume;