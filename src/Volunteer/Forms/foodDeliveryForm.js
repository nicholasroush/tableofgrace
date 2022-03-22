import React, { useState, useContext } from "react";
import './forms.css';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { formContext } from "../../components/context";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_brumrws";
const TEMPLATE_ID = "template_6x83k7q";
const USER_ID = "NQE1i_1bFX6wUO4Sb";

export function FoodDelivery() {
    const [option, setOption] = useState('delivery');
    const {deliveryDisplay} = useContext(formContext);

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
        <Form className="food-delivery" onSubmit={handleOnSubmit} style={deliveryDisplay}>
            <Row className="first-last">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="John"
                    minLength={2}
                    name="first_name"
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Doe"
                    minLength={2}
                    name="last_name"
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
                    name="email_address" 
                    required 
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control 
                    type="tel" 
                    placeholder="(999)999-9999" 
                    pattern="(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}"
                    name="phone_number" 
                    required 
                    />
                </Form.Group>
            </Row>
            <Row className="radios">
                <Form.Check
                    type='radio'
                    label='Food Prep'
                    id='prep-radio'
                    value='prep'
                    name="food_prep"
                    checked={option === 'prep'}
                    onChange={e => setOption(e.currentTarget.value)}
                />
                <Form.Check
                    type='radio'
                    label='Food Delivery'
                    id='delivery-radio'
                    value='delivery'
                    name="food_delivery"
                    checked={option === 'delivery'}
                    onChange={e => setOption(e.currentTarget.value)}
                />
            </Row>
            <Button type="submit">Submit</Button>
        </Form>
    );
}