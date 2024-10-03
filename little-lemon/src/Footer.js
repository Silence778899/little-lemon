import React from 'react';

function Footer() {

// need img
// need 3 diff ul with li inside
// ul needs to be titled

    return (
        <div>
            <img src={logo} alt="Logo" />;

            <ul>
                <li><h1>Doormat Navigation</h1></li>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>

            <ul>
                <li><h1>Contact</h1></li>
                <li>Adress</li>
                <li>Phone number</li>
                <li><a href="/login">Email</a></li>
            </ul>

            <ul>
                <li><h1>Social Media</h1></li>
                <li><a href="/instagram">Insta icon</a></li>
                <li><a href="/instagram">Insta icon</a></li>
                <li><a href="/instagram">Insta icon</a></li>
            </ul>
        </div>
    );
};

export default Footer;