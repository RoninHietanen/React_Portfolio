import React from 'react';
import './work-style.css';
import quiz from "./assets/images/Coding Quiz.PNG";
import chirp from "./assets/images/Chirper.PNG";
import dailyPlanner from "./assets/images/DailyPlanner.PNG";
import covidTracker from "./assets/images/Covid-19 Tracker.PNG";

function MyWork () {
    return (
        <div class="column">
            
            <h4 className="work-title" id="my-work">Work Samples</h4>
            
            <div className="content">
                <p><a className="work" href="https://roninhietanen.github.io/Coding_Quiz/">Coding Quiz</a> |<a className="work" href="https://github.com/RoninHietanen/Coding_Quiz"> Repository</a> </p>

                <img className="quiz-image" alt="Coding Quiz" src={quiz} />

                This is a coding quiz which allows the user to complete 10 multiple-choice questions and stores their score in the local storage. This page also displays the users highest score in the top left corner.
            </div>
           
            <div className="content">
                <p><a className="work" href="https://mysterious-bastion-78954.herokuapp.com/">Chirper</a> |<a className="work" href="https://github.com/RoninHietanen/Group_Project_2"> Repository</a></ p>

                <img className="chirper-image" alt="Chirper" src={chirp} />

                This is the second group project I have collaborated on. Chirper is a messaging application where users can sign-in/sign-up and then create or join chat-rooms where they can chat with each other.
            </div>
            
            <div className="content">
                <p><a className="work" href="https://roninhietanen.github.io/Daily_Planner/">Daily Planner</a> |<a className="work" href="https://github.com/RoninHietanen/Daily_Planner"> Repository</a></ p>

                <img className="planner-image" alt="Daily Planner" src={dailyPlanner} />

                This is a daily planner that allows the user to input and save text in the local storage. This daily planner will also track the time and turn the corrisponding input field grey once the hour has passsed.
            </div>
           
            <div className="content">
                <p><a className="work" href="https://mm-salvodragotta.github.io/Covid-19-Tracker/">Covid-19 Tracker</a> |<a className="work" href="https://github.com/RoninHietanen/Covid-19-Tracker"> Repository</a></ p>

                <img  className="covid-image" alt="Covid-19 Tracker Webpage" src={covidTracker} />

                This is the first collaborative project I have worked on. It is a Covid-19 Tracker which allowes the user search confirmed, revovered, and deaths from their desired countries and dates.
            </div>

            <hr />
            
        </div>
         
        
    );
}

export default MyWork;