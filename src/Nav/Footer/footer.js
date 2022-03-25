import React, {useRef} from "react";
import './footer.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import footerlogo from '../../pictures/Grace_Logo_Orange.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const SERVICE_ID = "service_brumrws";
const TEMPLATE_ID = "template_zdjcg3l";
const USER_ID = "NQE1i_1bFX6wUO4Sb";

const REACT_APP_RECAPTCHA_SITE_KEY='6LfOqv0eAAAAABepW8PBOc5EawZeEr-4cbCi0Vq1';
const REACT_APP_RECAPTCHA_SECRET_KEY='6LfOqv0eAAAAAO5eSCzMij0XoQKMqud1kQ44oGsm';


export function Footer() {
    const recaptchaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //recaptcha API request
        const captchaToken = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();
        
        const res = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${REACT_APP_RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
            { 
                captchaToken
            }
        );

        //sends email through emailjs if success ==> error: (No 'Access-Control-Allow-Origin' header is present on the requested resource.)
        if(res.data.success) {
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
        }
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
                        required 
                        />
                    </Form.Group>
                    <Form.Group className="footer-email" controlId="form-email">
                        <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                        name="email_address"
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
                        required 
                        />
                    </Form.Group>
                    <ReCAPTCHA 
                        ref={recaptchaRef}
                        size='invisible'
                        sitekey={REACT_APP_RECAPTCHA_SITE_KEY}
                    />
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <p>© 2022 Table of Grace Feeding Minsitries, All Rights reserved</p>
            <p>Developed by <a href='https://www.linkedin.com/in/nicholas-roush/' target='_blank' rel="noreferrer">Nicholas Roush</a></p>
        </div>
    );
}