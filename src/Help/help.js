import React from "react";
import './help.css';
import Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import helpdonate from '../pictures/helpimg1.jpg';
import helpvolunteer from '../pictures/helpimg2.jpg';
import helpcontact from '../pictures/helpimg3.jpg';
import { Link } from "react-router-dom";

export function Help() {

    return (
        <div className="help-main">
            <Card>
                <Card.Img variant="top" src={helpdonate} />
                <Card.Body>
                    <Card.Title>Donate</Card.Title>
                    <Link to='/donate'><Button variant="primary">Here</Button></Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={helpvolunteer} />
                <Card.Body>
                    <Card.Title>Volunteer</Card.Title>
                    <Link to='/volunteer'><Button variant="primary">Here</Button></Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={helpcontact} />
                <Card.Body>
                    <Card.Title>Contact</Card.Title>
                    <Link to='/contact'><Button variant="primary">Here</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
}