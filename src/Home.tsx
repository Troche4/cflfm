import React from "react";
import ActionButton from "./ActionButton";

export default function Home() {
    return <React.Fragment>
        <div className="homeHeaderText">
            <div>Coaching for Managing Partners, Practice Leaders, Law Firm COO's, CAOs and their Successors</div>
            <div>Confidential and Virtual Help from a Trusted Experienced Coach</div>
        </div>

        <div className="homeMain">
            <div className="sidebar">
                <div>
                    <div className="listHeader">Management is Tough Stuff - we will help you:</div>
                    <ul>
                        <li>Have Difficult Conversations</li>
                        <li>Engage in Healthy Conflict</li>
                        <li>Strive for an <i>All for One and One for All</i> Firm</li>
                        <li>Change Behaviors for Yourself and Others</li>
                        <li>Hold Yourself and Others Accountable</li>
                        <li>Plan and Execute</li>
                        <li>Strategic Planning; Time Management; Work/Life Balance</li>
                        <ul>
                            <li>
                            In short,  we will help you solve your firm's most vexing* challenges.<br/><br/>
                            * vexing  /'veksiNG/  adjective  causing annoyance, frustration or worry.
                            </li>
                        </ul>
                    </ul>
                    
                </div>
            </div>

            <img src="./consulting_hero.jpg" className="hero"/>

            <div className="sidebar">
                <div>
                    <div className="listHeader">Our Commitment</div>
                    <ul>
                        <li>Confidentiality Always</li>
                        <li>Efficient Use of Your Time</li>
                        <li>Flexible Scheduling</li>
                        <li>One Hour Weekly Meeting - with an Agenda and Follow-Up</li>
                        <li>Not Just Talk - a Written Action Plan with Goals and Metrics</li>
                    </ul>
                </div>
                <ActionButton />
            </div>
        </div>
    </React.Fragment>
}