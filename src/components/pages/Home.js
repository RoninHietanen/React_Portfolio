import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="columns is-half-desktop is-three-quarters-mobile is-two-thirds-tablet">
            <div className="column column-custom is-one-quarter">
                <h3 className="title" id="about-me">About Me</h3>
            </div>
            <div className="columns column-custom">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-128x128 block">
                            <img src="../assets/images/pfp.jpg" alt="My Profile Picture" />
                        </figure>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            My name is Ronin Hietanen currently studying web development. I am passionate about web development and the many paths it can lead to. I believe the webpages, applications, etc. that we use today are important in todays society. They allow people from all over to interact, play, create, and much much more together in an easy and simple way. This would not be possible without the existence of such applications.
                            To be apart of such a rich and thriving community I have undertaken studies to assist me on my path and am always eager to learn more to further push the extent of my capabilities. I am looking for a company that will allow me to learn and freely create in a way that will push me to become better with every future project. If this is you please contact me via email or phone provided in the "Contact Me" section of the page. Thank you for considering me and I look forward to hearing from you!
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="columns is-half-desktop is-three-quarters-mobile is-two-thirds-tablet">
            <div className="column column-custom is-one-quarter">
                <h4 className="title" id="my-work">Work Samples</h4>
            </div>
            <div className="column">
                <div className="columns">
                    <div className="column column-custom">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img alt="Coding Quiz" src="../assets/images/Coding Quiz.PNG" />
                                </figure>
                            </div>
                            <div className="card-content">
                              <div className="content">
                                <p><a href="https://roninhietanen.github.io/Coding_Quiz/">Coding Quiz</a></p>
                                <p><a href="https://github.com/RoninHietanen/Coding_Quiz">Repository</a></p>
                                This is a coding quiz which allows the user to complete 10 multiple-choice questions and stores their score in the local storage. This page also displays the users highest score in the top left corner.
                              </div>
                            </div>
                        </div>
        
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img alt="Chirper" src="../assets/images/Chirper.PNG" />
                                </figure>
                            </div>
                            <div className="card-content">
                              <div className="content">
                                <p><a href="https://mysterious-bastion-78954.herokuapp.com/">Chirper</a></p>
                                <p><a href="https://github.com/RoninHietanen/Group_Project_2">Repository</a></p>
                                This is the second group project I have collaborated on. Chirper is a messaging application where users can signin/signup and then create or join chatrooms where they can chat with eachother.
                              </div>
                            </div>
                        </div>
        
                    </div>
        
                    <div className="column column-custom">
        
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img alt="Daily Planner" src="../assets/images/DailyPlanner.PNG" />
                                </figure>
                            </div>
                            <div className="card-content">
                              <div className="content">
                                <p><a href="https://roninhietanen.github.io/Daily_Planner/">Daily Planner</a></p>
                                <p><a href="https://github.com/RoninHietanen/Daily_Planner">Repository</a></p>
                                This is a daily planner that allows the user to input and save text in the local storage. This daily planner will also track the time and turn the corrisponding input field grey once the hour has passsed.
                              </div>
                            </div>
                        </div>
        
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img alt="Covid-19 Tracker Webpage" src="../assets/images/Covid-19 Tracker.PNG" />
                                </figure>
                            </div>
                            <div className="card-content">
                              <div className="content">
                                <p><a href="https://mm-salvodragotta.github.io/Covid-19-Tracker/">Covid-19 Tracker</a></p>
                                <p><a href="https://github.com/RoninHietanen/Covid-19-Tracker">Repository</a></p>
                                This is the first collaborative project I have worked on. It is a Covid-19 Tracker which allowes the user search confirmed, revovered, and deaths from their desired countries and dates.
                              </div>
                            </div>
                        </div>
         
                    </div>
                </div>
            </div>
        </div>

        <div className="columns is-half-desktop is-three-quarters-mobile is-two-thirds-tablet">
            <div className="column column-custom is-one-quarter">
                <h5 className="title" id="contact-me">Contact Me</h5>
            </div>
            <div className="column column-custom">
                <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <p><a href="mailto:ronin.hietanen@outlook.com">ronin.hietanen@outlook.com</a></p>
                        <p><a href="tel:0452380030">0452 380 030</a></p>
                        <p><a href="https://www.linkedin.com/in/ronin-hietanen-878a50211/">LinkedIn</a></p>
                        <p><a href="https://github.com/RoninHietanen">GitHub</a></p>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="columns is-half-desktop is-three-quarters-mobile is-two-thirds-tablet">
            <div className="column column-custom is-one-quarter">
                <h6 className="title" id="resume">Resume</h6>
            </div>
            <div className="column column-custom">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <p><a href="../assets/other/Resume - Ronin Hietanen.pdf">Resume - Ronin Hietanen</a></p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  );
}
