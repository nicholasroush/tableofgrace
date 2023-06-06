import React, {useState, useRef} from "react";
import './contact.css';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { HiOutlinePhoneOutgoing } from 'react-icons/hi';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";

export function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const recaptchaRef = useRef(null);
    const formState = { firstName, lastName, email, phone, message };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const captchaToken = await recaptchaRef.current.executeAsync();
        const params = {
            ...formState,
            'g-recaptcha-response': captchaToken
        };

        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_CON_TEMPLATE_ID, params, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setMessage('');
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
        recaptchaRef.current.reset();
    };

    return (
        <div className="contact-main">
            <div className="contact-head">
                <h1>Contact Us</h1>
                <h3>Please contact before showing up to schedule a day!</h3>
                <h5>If you are contacting to volunteer please refer to our <Link to='/volunteer'>Volunteer Page</Link>.</h5>
            </div>
            <div className="contact-content">
                <Form onSubmit={handleSubmit}>
                    <Form.Text>For all questions and food donation inquiries.</Form.Text>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                minLength={2}
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                minLength={2}
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
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
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            />
                        </Form.Group>
                        <Form.Group md="3" controlId="validationCustom04">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                            type="tel" 
                            placeholder="(999)999-9999" 
                            pattern="(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}"
                            name="phone" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required 
                            />
                        </Form.Group>
                    </Row>
                    <ReCAPTCHA 
                    ref={recaptchaRef}
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    size='invisible'
                    />
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