import React, { useContext } from "react";
import { aboutContext } from "../../components/context";
import graphone from '../../pictures/served-graph.jpg'

export function Stats() {
    const {statsStyle} = useContext(aboutContext);

    return (
        <div className="stats-main" style={statsStyle}>
            <h1>Statistics</h1>
            <img src={graphone} alt='Individules Served Graph' />
        </div>
    );
}