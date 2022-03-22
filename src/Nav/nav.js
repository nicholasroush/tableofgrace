import React, { useState, useEffect } from "react";
import './nav.css';
import { NavLink } from 'react-router-dom';
import logo from '../pictures/Grace_Logo_Orange.png';
import { VscListFlat } from 'react-icons/vsc';
import { VscChromeClose } from 'react-icons/vsc';
import useWindowDimensions from "../components/checkWindowSize";

export function Nav() {
    const [resize, setResize] = useState({});
    const [linkSize, setLinkSize] = useState({});
    const [mobileStyle, setMobileStyle] = useState(false);
    const { width } = useWindowDimensions();

    const listenToScroll = () => {
        let heightToResize = 1;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
           
        if (winScroll >= heightToResize && width > 800) { 
            setResize({height: '3rem'});
            setLinkSize({fontSize: '.8rem'})
        } else {
            setResize({height: '6rem'});
            setLinkSize({fontSize: '1rem'})
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => 
            window.removeEventListener("scroll", listenToScroll); 
    })

    const handleClick = e => {
        e.preventDefault();
        setMobileStyle(!mobileStyle);
    }

    return (
        <div className="nav-main">
            <NavLink to='/'>
                <img src={logo} alt='logo' style={resize} />
            </NavLink>
            <ul className='nav-links' id={mobileStyle ? 'mobile' : 'none'}>
                <NavLink to='/' style={linkSize}>
                    <li className='nav-home nav-li'>Home</li>
                </NavLink>
                <NavLink to='/about' style={linkSize}>
                    <li className='nav-about nav-li'>About Us</li>
                </NavLink>
                <NavLink to='/volunteer' style={linkSize}>
                    <li className='nav-olunteer nav-li'>Volunteer Opportunities</li>
                </NavLink>
                <NavLink to='/donate' style={linkSize}>
                    <li className='nav-donate nav-li'>Donate</li>
                </NavLink>
                <NavLink to='/contact' style={linkSize}>
                    <li className='nav-contact nav-li'>Contact Us</li>
                </NavLink>
            </ul>
            { 
                mobileStyle ? <VscChromeClose className="mobile-nav" onClick={handleClick} /> : <VscListFlat className="mobile-nav" onClick={handleClick} />
            }
        </div>
    );
}