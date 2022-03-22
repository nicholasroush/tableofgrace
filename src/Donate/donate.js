import React from "react";
import './donate.css';
import donate from '../pictures/donate.png';
import { Link } from "react-router-dom";

export function Donate() {

    return (
        <div className="donate-main">
            <div className="donate-content">
                <h1>Make A Difference.
                    <br />
                Every Amount Counts.</h1>
                <div className="donation-text">
                    <p><span>Table of Grace</span> was founded on the basis of food rescue, portioning those resources back to our community members who need it most. Unfortunally we cannot function on food donation alone. We rely heavily on monetary donations, from those who can afford to give, to fill the gaps of our needs.</p>
                    <p>We do not ask for anyone to give who is not in a position to do so. If you would like to help in a different way we have <Link to='/volunteer'>Volunteer Oppertunities</Link> available. Or <Link to='/contact'>Contact Us</Link> to find out about our food donation needs.</p>
                    <p>To find out more about our financial transparency click <a href='https://www.causeiq.com/organizations/table-of-grace-feeding-ministry,811493422/' target='_blank' rel="noreferrer">here</a>.</p>
                </div>
                <a href='https://www.paypal.com/donate/?hosted_button_id=R5DAM6H4TYYK4' target='_blank' rel="noreferrer">
                    <img src={donate} className='donate-page' alt='PayPal donation link' />
                </a>
            </div>
        </div>
    );
}