import React, { useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import BookingForm from "./BookingForm.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import pages from "./pages.js";
import { fetchAPI, submitAPI } from "./FakeAPI.js";

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
      const navigate = useNavigate();

    const submitForm = formData => {
        const response = submitAPI(formData);
        if (response) navigate(pages.get('confirmedBooking').path);
        };

    return (
        <div class="site-wrapper">
            <Nav></Nav>
            <BookingForm
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitForm={submitForm} />
            <Footer></Footer>
        </div>
    );

};

export default BookingPage;