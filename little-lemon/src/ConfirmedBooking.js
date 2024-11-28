import React from "react";
import { FcCheckmark } from "react-icons/fc";


const ConfirmedBooking = () => {
    return (
        <div className="container confirmed-booking">
            <FcCheckmark size="3x"/>
            <h2>Your reservation has been confirmed.</h2>
            <p>You will receive an email with all the details.</p>
        </div>
    );
};

export default ConfirmedBooking;