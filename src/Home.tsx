import React from "react";
import ActionButton from "./ActionButton";

export default function Home() {
    return <React.Fragment>
        <div className="homeHeaderText">
            <div>Coaching for Managing Partners, Practice Leaders, Law Firm COO's, CAOs and their Successors</div>
            <div>Confidential and Virtual Help from a Trusted Experienced Coach</div>
        </div>

        <div className="homeMain">
            <ActionButton/>
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
        </div>
    </React.Fragment>
}