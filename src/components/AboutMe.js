import React from 'react';
import './about-style.css';
import pfp from './assets/images/pfp.jpg';

function AboutMe () {
    return (
        <div className="column">
            <h3 className="title-about" id="about-me">About Me</h3>
            
            <div className="image-wrap">
                <img className="about-image" src={pfp} alt="My Profile Picture" />
            </div>
    
            <div className="content">
                My name is Ronin Hietanen currently studying web development. I am passionate about web development and the many paths it can lead to. I believe the webpages, applications, etc. that we use today are important in todays society. They allow people from all over to interact, play, create, and much much more together in an easy and simple way. This would not be possible without the existence of such applications.
                To be apart of such a rich and thriving community I have undertaken studies to assist me on my path and am always eager to learn more to further push the extent of my capabilities. I am looking for a company that will allow me to learn and freely create in a way that will push me to become better with every future project. If this is you please contact me via email or phone provided in the "Contact Me" section of the page. Thank you for considering me and I look forward to hearing from you!
            </div>

            <hr />
              
        </div>
    );
}

export default AboutMe;