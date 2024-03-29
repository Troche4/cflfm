import * as React from "react";

export default function Presentations() {
    return <div className="bioContainer">
        <div className="centeredText">
           <h3>10 Great Ideas for Law Firm Managers</h3>
        </div>
        <div className="homeMain">
            <ul>
                <li>Leadership and Talent Development - Six Tools.</li>
                <li>Culture - Got Mission? Got Vision? Got Values?</li>
                <li>Teams and Team Building - Don't Go It Alone!</li>
                <li>Managing Conflict - Is it Possible to Engage in "Healthy Conflict?"</li>
                <li>Performance Management - "What Have You Heard Here Today?"</li>
                <li>Meeting Rules - For the Most Efficient, Productive, Creative and Fun Meetings.</li>
                <li>Don't Ignore Personal Growth and Happiness.</li>
                <li>Marketing - The 5<sup>th</sup> P - a New World of Marketing - People.</li>
                <li>Negotiation - Kenny Rogers Gives a Masters Class in Negotiation.</li>
                <li>Communication - "Take off your sunglasses so I can see what you are saying."</li>
            </ul> 
            <div className="sidebar">
                <img src="./hero.jpg" className="hero"/>
            </div>
        </div>
    </div>
}
