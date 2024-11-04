import React from 'react';
import IconHome from './IconHome';
import IconInsta from './IconInstagram';
import IconX from './IconTwitter';
import { Link } from "react-router-dom";
import IconFB from './IconFacebook';

function Footer() {

    return (
        <div class="footer-main">
            <div class="home">
                <Link to="/Home"><IconHome></IconHome></Link>
                <p>Return to the top</p>
            </div>

            <div class="footer-navbar">
                <div class="footerColHead" role="Heading">Nav</div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>

            <div class="footer-contact">
                <div class="footerColHead" role="Heading">Contact Us</div>
                <ul>
                    <li>Adress</li>
                    <li>Phone number</li>
                    <li><a href="/login">Email</a></li>
                </ul>
            </div>

            <div class="footer-social">
                <div class="footerColHead" role="Heading">Social Media Links</div>
                <ul>
                    <a href="/instagram"><IconInsta></IconInsta></a>
                    <a href="/twitter"><IconX></IconX></a>
                    <a href="/facebook"><IconFB></IconFB></a>
                </ul>
            </div>
        </div>
    );
};

export default Footer;