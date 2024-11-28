import React from 'react';
import logo from './img/Logo.svg';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav-main">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="nav-fill">
                <ul>
                    <li class="horizontal"><Link to='/HomePage'>Home</Link></li>
                    <li class="horizontal"><Link to="/About">About</Link></li>
                    <li class="horizontal"><Link to="/Menu">Menu</Link></li>
                    <li class="horizontal"><Link to="/BookingPage">Reservations</Link></li>
                    <li class="horizontal"><Link to="/Order">Order Online</Link></li>
                    <li class="horizontal"><Link to="/Login">Login</Link></li>
                </ul>
            </div>
        </div>
    );

};


export default Nav;