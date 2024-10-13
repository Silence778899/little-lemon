import React from 'react';
import logo from './img/Logo.svg';

function Nav() {
    return (
        <div class="nav-main">
            <div class="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div class="nav-fill">
                <ul>
                    <li class="horizontal"><a href="/home">Home</a></li>
                    <li class="horizontal"><a href="/about">About</a></li>
                    <li class="horizontal"><a href="/menu">Menu</a></li>
                    <li class="horizontal"><a href="/reservations">Reservations</a></li>
                    <li class="horizontal"><a href="/order">Order Online</a></li>
                    <li class="horizontal"><a href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    );

};


export default Nav;