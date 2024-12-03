import React from "react";
import { FcCheckmark } from "react-icons/fc";
import Nav from "./Nav";
import Footer from "./Footer";


const ConfirmedBooking = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="container confirmed-booking" style={{display: "grid", justifyContent: "center"}}>
                <FcCheckmark size="100%"/>
                <h2>Your reservation has been confirmed.</h2>
                <p>You will receive an email with all the details.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ConfirmedBooking;