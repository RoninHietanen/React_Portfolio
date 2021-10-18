import React from 'react';
import './contact-style.css';

function ContactMe () {
    return (
        <div className="column">
    
            <h5 className="contact-title" id="contact-me">Contact Me</h5>
            
            <div className="content">
                <p><p className="label">Email: </p> <a  className="contact-styling" href="mailto:ronin.hietanen@outlook.com">ronin.hietanen@outlook.com</a></p>
                <p><p className="label">Phone #: </p><a  className="contact-styling" href="tel:0452380030">0452 380 030</a></p>
                <p><p className="label">LinkedIn: </p><a  className="contact-styling" href="https://www.linkedin.com/in/ronin-hietanen-878a50211/">Ronin Hietanen</a></p>
                <p><p className="label">GitHub: </p><a  className="contact-styling" href="https://github.com/RoninHietanen">RoninHietanen</a></p>
            </div>
                  
            <hr />

        </div>
    );
}

export default ContactMe;