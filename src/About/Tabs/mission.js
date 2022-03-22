import React, { useContext } from "react";
import { aboutContext } from "../../components/context";
import '../about.css';

export function Mission() {
    const {missionStyle} = useContext(aboutContext);

    return (
        <div className="mission-main" style={missionStyle}>
            <h1>Our Mission</h1>
            <p>Table of Grace Feeding Ministry exists to ease food insecurity of those we serve. We are a God led Ministry made up of like-minded volunteers. We treat everyone with respect and all we do is for the glory of God.</p>
        </div>
    );
}