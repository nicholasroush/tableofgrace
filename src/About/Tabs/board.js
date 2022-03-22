import React, { useContext } from "react";
import { aboutContext } from "../../components/context";

export function Board() {
    const {boardStyle} = useContext(aboutContext);

    return (
        <div className="board-main" style={boardStyle}>
            <h1>Board of Directors</h1>
            <ul>
                <li>Tanis Fox</li>
                <li>Ron Fox</li>
                <li>Sarah Hancher, Esq.</li>
                <li>Wayne Seibel</li>
                <li>Sue Seibel</li>
            </ul>
        </div>
    );
}