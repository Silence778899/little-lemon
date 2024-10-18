import React from 'react';
import { Link } from "react-router-dom";
import heroImage from './img/restauranfood.jpg';
import Order from './Order.js';

function ButtonLink({ to, children }) {
    return <Link to={to}><button>{children}</button></Link>;
}


function CallToAction() {
    return (
        <div class="call-main">
            <div class="call-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

            <ButtonLink variant="contained" id="btn-yellow" to="/Order">Reserve a Table</ButtonLink>

            </div>
            <div class="call-img">
                <img src={heroImage} alt="heroImage" id="testimg" />
            </div>
        </div>
    );

};

export default CallToAction;