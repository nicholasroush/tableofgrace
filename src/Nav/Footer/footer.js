import React, {useState, useRef} from "react";
import './footer.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import footerlogo from '../../pictures/Grace_Logo_Orange.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";

export function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const recaptchaRef = useRef(null);
    const formState = { name, email, message };

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
            setName('');
            setEmail('');
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
    }

    return (
        <div className="footer-main">
            <div className="links">
                <ul>
                    <Link to='/about'><li>About Us</li></Link>
                    <Link to='/donate'><li>Donate</li></Link>
                    <li>Privacy Policy</li>
                    <a href='#top'><li><img src={footerlogo} alt='logo' /></li></a>
                    <li className="follow">Follow Us:</li>
                    <a href='https://www.facebook.com/profile.php?id=100064564216547' target='_blank' rel="noreferrer"><li><FaFacebookSquare className="facebook-logo" /></li></a>
                </ul>
            </div>
            <div className="footer-contact">
                <h4>Contact Us</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="footer-name" controlId="form-name">
                        <Form.Control 
                        type="text" 
                        placeholder="Jane Doe" 
                        minLength={2} 
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                        />
                    </Form.Group>
                    <Form.Group className="footer-email" controlId="form-email">
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
                    <Form.Group className="footer-textarea" controlId="text-area">
                        <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="How can we help?" 
                        minLength="10" 
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required 
                        />
                    </Form.Group> 
                    <ReCAPTCHA 
                    ref={recaptchaRef}
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    size='invisible'
                    />
                    <Button variant="secondary" type="submit">Submit</Button>
                </Form>
            </div>
            <p>© 2022 Table of Grace Feeding Minsitries, All Rights reserved</p>
            <p>Developed by <a href='https://www.linkedin.com/in/nicholas-roush/' target='_blank' rel="noreferrer">Nicholas Roush</a></p>
        </div>
    );
}