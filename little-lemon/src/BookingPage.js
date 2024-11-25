import React, { useReducer } from "react";
import BookingForm from "./BookingForm.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

<script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
  };

const initializeTimes = initialAvailableTimes =>
    [...initialAvailableTimes, ...fetchAPI(new Date())];

const BookingPage = () => {
    const [
        availableTimes,
        dispatchOnDateChange
      ] = useReducer(updateTimes, [], initializeTimes);

const submitData = formData => {
    const response = submitAPI(formData);
    if (response) console.log("booking confirmed! page under construction");
    };

    return (
        <div class="site-wrapper">
            <Nav></Nav>
            <BookingForm
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitData={submitData} />
            <Footer></Footer>
        </div>
    );

};

export default BookingPage;