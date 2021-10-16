import React from 'react';

export default function Contact() {
  return (
    <div>
      <div class="columns is-half-desktop is-three-quarters-mobile is-two-thirds-tablet">
            <div class="column column-custom is-one-quarter">
                <h5 class="title" id="contact-me">Contact Me</h5>
            </div>
            <div class="column column-custom">
                <div class="card">
                    <div class="card-content">
                        <div class="content">
                            <p>I am easiest to contact via email however if you urgently need to contact me please call and leave a message so I can get back to you as soon as possible.</p>
                            <p><a href="mailto:ronin.hietanen@outlook.com">ronin.hietanen@outlook.com</a></p>
                            <p><a href="tel:0452380030">0452 380 030</a></p>
                            <p><a href="https://www.linkedin.com/in/ronin-hietanen-878a50211/">LinkedIn</a></p>
                            <p><a href="https://github.com/RoninHietanen">GitHub</a></p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    
        <div class="columns is-half-desktop is-three-quarters-mobile is-two-thirds-tablet">
            <div class="column column-custom is-one-quarter">
                <h6 class="title" id="resume">Resume</h6>
            </div>
            <div class="column column-custom">
                <div class="card">
                    <div class="card-content">
                        <div class="content">
                            <p>Below is a .pdf of my resume that you can freely view and download if desired. </p>
                            <p><a href="../assets/other/Resume - Ronin Hietanen.pdf">Resume - Ronin Hietanen.pdf</a></p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  );
}
