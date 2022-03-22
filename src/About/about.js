import React, { useState, useEffect } from "react";
import './about.css';
import Card from "react-bootstrap/Card";
import { GiEyeTarget } from 'react-icons/gi';
import { GiBookshelf } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import { MdQueryStats } from 'react-icons/md';
import { Mission } from "./Tabs/mission";
import { History } from "./Tabs/history";
import { Board } from "./Tabs/board";
import { Stats } from "./Tabs/stats";
import { aboutContext } from "../components/context";

export function About() {
    const [missionDisplay, setMissionDisplay] = useState(true);
    const [missionStyle, setMissionStyle] = useState({});
    const [missionActive, setMissionActive] = useState({});
    const [historyDisplay, setHistoryDisplay] = useState(false);
    const [historyStyle, setHistoryStyle] = useState({});
    const [historyActive, setHistoryActive] = useState({});
    const [boardDisplay, setBoardDisplay] = useState(false);
    const [boardStyle, setBoardStyle] = useState({});
    const [boardActive, setBoardActive] = useState({});
    const [statsDisplay, setStatsDisplay] = useState(false);
    const [statsStyle, setStatsStyle] = useState({});
    const [statsActive, setStatsActive] = useState({});

    const showMission = e => {
        e.preventDefault();
        setMissionDisplay(true);
        setHistoryDisplay(false);
        setBoardDisplay(false);
        setStatsDisplay(false);
    };

    const showHistory = e => {
        e.preventDefault();
        setMissionDisplay(false);
        setHistoryDisplay(true);
        setBoardDisplay(false);
        setStatsDisplay(false);
    };

    const showBoard = e => {
        e.preventDefault();
        setMissionDisplay(false);
        setHistoryDisplay(false);
        setBoardDisplay(true);
        setStatsDisplay(false);
    };

    const showStats = e => {
        e.preventDefault();
        setMissionDisplay(false);
        setHistoryDisplay(false);
        setBoardDisplay(false);
        setStatsDisplay(true);
    };

    useEffect(() => {
        if (missionDisplay === true) {
            setMissionActive({borderBottom: '.5rem solid #B56018'});
            setHistoryActive({borderBottom: 'none'});
            setBoardActive({borderBottom: 'none'});
            setStatsActive({borderBottom: 'none'});
            setMissionStyle({display: 'flex'});
            setHistoryStyle({display: 'none'});
            setBoardStyle({display: 'none'});
            setStatsStyle({display: 'none'});
        } else if (historyDisplay === true) {
            setMissionActive({borderBottom: 'none'});
            setHistoryActive({borderBottom: '.5rem solid #B56018'});
            setBoardActive({borderBottom: 'none'});
            setStatsActive({borderBottom: 'none'});
            setMissionStyle({display: 'none'});
            setHistoryStyle({display: 'flex'});
            setBoardStyle({display: 'none'});
            setStatsStyle({display: 'none'});
        } else if (boardDisplay === true) {
            setMissionActive({borderBottom: 'none'});
            setHistoryActive({borderBottom: 'none'});
            setBoardActive({borderBottom: '.5rem solid #B56018'});
            setStatsActive({borderBottom: 'none'});
            setMissionStyle({display: 'none'});
            setHistoryStyle({display: 'none'});
            setBoardStyle({display: 'flex'});
            setStatsStyle({display: 'none'});
        } else if (statsDisplay === true) {
            setMissionActive({borderBottom: 'none'});
            setHistoryActive({borderBottom: 'none'});
            setBoardActive({borderBottom: 'none'});
            setStatsActive({borderBottom: '.5rem solid #B56018'});
            setMissionStyle({display: 'none'});
            setHistoryStyle({display: 'none'});
            setBoardStyle({display: 'none'});
            setStatsStyle({display: 'flex'});
        } else {
            setMissionActive({borderBottom: 'none'});
            setHistoryActive({borderBottom: 'none'});
            setBoardActive({borderBottom: 'none'});
            setStatsActive({borderBottom: 'none'});
            setMissionStyle({display: 'none'});
            setHistoryStyle({display: 'none'});
            setBoardStyle({display: 'none'});
            setStatsStyle({display: 'none'});
        }
    }, [missionDisplay, historyDisplay, boardDisplay, statsDisplay])

    return (
        <div className="about-main">
            <div className="about-head">
                <h1>About Us</h1>
            </div>
            <div className="about-links">
                <Card onClick={showMission} style={missionActive}>
                    <Card.Body>
                        <Card.Title>Mission Statement</Card.Title>
                        <GiEyeTarget className="about-link-img" />
                    </Card.Body>
                </Card>
                <Card onClick={showHistory} style={historyActive}>
                    <Card.Body>
                        <Card.Title>History</Card.Title>
                        <GiBookshelf className="about-link-img" />
                    </Card.Body>
                </Card>
                <Card onClick={showBoard} style={boardActive}>
                    <Card.Body>
                        <Card.Title>Board of Directors</Card.Title>
                        <IoIosPeople className="about-link-img" />
                    </Card.Body>
                </Card>
                <Card onClick={showStats} style={statsActive}>
                    <Card.Body>
                        <Card.Title>Statistics</Card.Title>
                        <MdQueryStats className="about-link-img" />
                    </Card.Body>
                </Card>
            </div>
            <div className="about-content">
                <aboutContext.Provider value={{missionStyle, historyStyle, boardStyle, statsStyle}}>
                    <Mission />
                    <History />
                    <Board />
                    <Stats />
                </aboutContext.Provider>
            </div>
        </div>
    );
}