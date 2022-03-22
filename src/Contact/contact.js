import React from "react";
import './contact.css';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { HiOutlinePhoneOutgoing } from 'react-icons/hi';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_brumrws";
const TEMPLATE_ID = "template_zdjcg3l";
const USER_ID = "NQE1i_1bFX6wUO4Sb";

export function Contact() {

    const handleOnSubmit = e => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
            })
        });
        e.target.reset()
    };

    return (
        <div className="contact-main">
            <div className="contact-head">
                <h1>Contact Us</h1>
                <h3>Please contact before showing up to schedule a day!</h3>
                <h5>If you are contacting to volunteer please refer to our <Link to='/volunteer'>Volunteer Page</Link>.</h5>
            </div>
            <div className="contact-content">
                <Form onSubmit={handleOnSubmit}>
                    <Form.Text>For all questions and food donation inquiries.</Form.Text>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                minLength={2}
                                name="first_name"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                minLength={2}
                                name="last_name"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group md="3" controlId="validationCustom03">
                            <Form.Label>E-mail*</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="name@example.com" 
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                            name="email_address"
                            required 
                            />
                        </Form.Group>
                        <Form.Group md="3" controlId="validationCustom04">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                            type="tel" 
                            placeholder="(999)999-9999" 
                            pattern="(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}"
                            name="phone_number" 
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="footer-textarea" controlId="text-area">
                            <Form.Label>Message*</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            md="6" 
                            rows={6} 
                            placeholder="How can we help?" 
                            minLength="10" 
                            name="message"
                            required 
                            />
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit</Button>
                </Form>
                <iframe title="Central United Methodist Church of Beaver Falls, PA" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3727058687537!2d-80.32049628387755!3d40.75382664299124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883470ff78dbb787%3A0x69dbebbab7b22c27!2s1227%206th%20Ave%2C%20Beaver%20Falls%2C%20PA%2015010!5e0!3m2!1sen!2sus!4v1647279378383!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
                <div className="contact-info">
                    <div className="days">
                        <h3>Serving Hours:</h3>
                        <h3>Monday & Thursday</h3>
                        <h5>3:30pm-5:00pm</h5>
                    </div>
                    <div>
                        <a href="tel:7245842966"><p className="tel"><HiOutlinePhoneOutgoing className="call-icon" /> Phone</p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}