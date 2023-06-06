import React, { useState, useRef, useContext } from "react";
import './forms.css';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { formContext } from "../../components/context";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";

export function FoodDelivery() {
    const [volOption, setVolOption] = useState('Food Delivery');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const {deliveryDisplay} = useContext(formContext);
    const recaptchaRef = useRef(null);
    const formState = { firstName, lastName, email, phone, volOption };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const captchaToken = await recaptchaRef.current.executeAsync();
        const params = {
            ...formState,
            'g-recaptcha-response': captchaToken
        };

        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_VOL_TEMPLATE_ID, params, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setVolOption(volOption);
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
    }

    return (
        <Form className="food-delivery" onSubmit={handleSubmit} style={deliveryDisplay}>
            <Row className="first-last">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="John"
                    minLength={2}
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Doe"
                    minLength={2}
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
            </Row>
            <Row className="email-phone">
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>E-mail</Form.Label>
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
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control 
                    type="tel" 
                    placeholder="(999)999-9999" 
                    pattern="(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}"
                    name="phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required 
                    />
                </Form.Group>
            </Row>
            <Row className="radios">
                <Form.Check
                    type='radio'
                    label='Food Prep'
                    id='prep-radio'
                    value='Food Prep'
                    name="volOption"
                    checked={volOption === 'Food Prep'}
                    onChange={(e) => setVolOption(e.target.value)}
                />
                <Form.Check
                    type='radio'
                    label='Food Delivery'
                    id='delivery-radio'
                    value='Food Delivery'
                    name="volOption"
                    checked={volOption === 'Food Delivery'}
                    onChange={(e) => setVolOption(e.target.value)}
                />
            </Row>
            <ReCAPTCHA 
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            size='invisible'
            />
            <Button type="submit">Submit</Button>
        </Form>
    );
}