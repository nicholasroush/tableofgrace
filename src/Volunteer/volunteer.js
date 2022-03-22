import React, { useState } from "react";
import './volunteer.css';
import { polaroids } from './polaroidobj';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/card";
import serving from '../pictures/serving1.jpg';
import delivering from '../pictures/delivering1.jpg';
import groupcook from '../pictures/group-cooking1.jpg';
import { Forms } from "./Forms/forms";
import { formContext } from "../components/context";

export function Volunteer() {
    const [prepDisplay, setPrepDisplay] = useState({display: 'none'});
    const [deliveryDisplay, setDeliveryDisplay] = useState({display: 'none'});
    const [groupDisplay, setGroupDisplay] = useState({display: 'none'});

    const showPrep = e => {
        e.preventDefault();
        setPrepDisplay({display: 'flex'});
        setDeliveryDisplay({display: 'none'});
        setGroupDisplay({display: 'none'});
    };

    const showDelivery = e => {
        e.preventDefault();
        setDeliveryDisplay({display: 'flex'});
        setPrepDisplay({display: 'none'});
        setGroupDisplay({display: 'none'});
    };

    const showGroup = e => {
        e.preventDefault();
        setGroupDisplay({display: 'flex'});
        setPrepDisplay({display: 'none'});
        setDeliveryDisplay({display: 'none'});
    };

    return (
        <div className="volunteer-main">
            <div className="volunteer-head">
                <div className="volunteer-head-text">
                    <h1>Volunteer Opportunities</h1>
                    <h4 className="vol-text"><span>Table of Grace</span> relies heavily on our volunteers to help us attain our goal of seeing food, that would otherwise be wasted, go to those in our area who need it most. Whether it be picking up and delivering donated goods or helping prepare meals and desserts at our kitchen, your help is invaluable and crucial to our success. We also welcome groups to prepare meals and bring them in or work out of our kitchen. <br /> Get in contact with us and become part of our team!</h4>
                    <div className="shift-times">
                        <h3>Monday & Thursday</h3>
                        <h4>12:00pm-5:30pm</h4>
                        <h5>Partial shifts welcome.*</h5>
                    </div>
                    <a href='#options'><Button size="lg">Discover</Button></a>
                </div>
                <div className="polaroid-pics">
                    {polaroids.map(({img, cname, alt, key}) => (
                        <div key={key} className={cname}>
                            <img src={img} alt={alt} />
                        </div>
                    ))}
                </div>
            </div>
            <div id='options' className="volunteer-options">
                <Card className="vol-prep">
                    <Card.Img variant="top" src={serving} />
                    <Card.Body>
                        <Card.Title>Food Preparation</Card.Title>
                        <Card.Text>
                        Duties include assisting with meal prep, boxing desserts, refilling the food tables, packing take out bags and handing them out, washing dishes and general clean up.
                        </Card.Text>
                        <Button variant="primary" onClick={showPrep}>Apply Here</Button>
                    </Card.Body>
                </Card>
                <Card className='vol-delivery'>
                <Card.Img variant="top" src={delivering} />
                    <Card.Body>
                        <Card.Title>Food Pick-up/Delivery</Card.Title>
                        <Card.Text>
                        Pick-ups and deliveries are another way to volunteer as needs arise. Pick-ups are throughout the Beaver Falls / Ellwood City area.
                        </Card.Text>
                        <Button variant="primary" onClick={showDelivery}>Apply Here</Button>
                    </Card.Body>
                </Card>
                <Card className="vol-group">
                <Card.Img variant="top" src={groupcook} />
                    <Card.Body>
                        <Card.Title>Group Opportunities</Card.Title>
                        <Card.Text>
                        Volunteer as an organization or gather a group of friends and do a full meal prep at our kitchen, or in your home and deliver the cooked food for us to serve.
                        </Card.Text>
                        <Button variant="primary" onClick={showGroup}>Apply Here</Button>
                    </Card.Body>
                </Card>
            </div>
            <formContext.Provider value={{ prepDisplay, deliveryDisplay, groupDisplay }}>
                <Forms />
            </formContext.Provider>
        </div>
    );
}