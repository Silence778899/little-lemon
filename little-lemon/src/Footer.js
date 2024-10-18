import React from 'react';
import logo from './img/Logo.svg';

function Footer() {

    return (
        <div class="footer-main">
            <div class="logo">
                <img src={logo} alt="Logo" />
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
                    <li><a href="/instagram">Insta icon</a></li>
                    <li><a href="/instagram">Insta icon</a></li>
                    <li><a href="/instagram">Insta icon</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;