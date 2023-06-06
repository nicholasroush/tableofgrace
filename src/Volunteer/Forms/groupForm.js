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

export function GroupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [orgName, setOrgName] = useState('');
    const [orgNum, setOrgNum] = useState('');
    const {groupDisplay} = useContext(formContext);
    const recaptchaRef = useRef(null);
    const formState = { firstName, lastName, email, phone, orgName, orgNum };

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
                setOrgName('');
                setOrgNum('');
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
        <Form className="group-form" onSubmit={handleSubmit} style={groupDisplay}>
            <Row className="first-last">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="John"
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
            <Row className="group-info">
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Organization Name</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Table of Grace"
                    name="orgName"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom06">
                    <Form.Label>Number of Volunteers</Form.Label>
                    <Form.Control
                    type="number"
                    placeholder="If unsure leave blank."
                    name="orgNum"
                    value={orgNum}
                    onChange={(e) => setOrgNum(e.target.value)}
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
    );
}