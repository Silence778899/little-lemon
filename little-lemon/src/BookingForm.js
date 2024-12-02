import React, { useState } from "react";
import FormField from "./FormField";
import chicagoImage2 from './img/chicagoImage2.jpg';

const BookingForm = ({
    availableTimes,
    dispatchOnDateChange,
    submitForm
}) => {

    const minimumDate = new Date().toISOString().split('T')[0];
   const defaultTime = availableTimes[0];
    const minimumNumberOfGuests = 1;
    const maximumNumberOfGuests = 10;
    const occasions = ['Social Event', 'Birthday', 'Anniversary'];
    const invalidDateErrorMessage = 'Please choose a valid date';
    const invalidTimeErrorMessage = 'Please choose a valid time';
    const invalidOccasionErrorMessage = 'Please choose a valid occasion';
    const invalidGuestsErrorMessage =
      'Please enter a number between 1 and 10';

    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState(defaultTime);
    const [guests, setGuests] = useState(minimumNumberOfGuests);
    const [occasion, setOccasion] = useState(occasions[0]);

    const isDateValid = () => date !== '';
    const isTimeValid = () => time !== '';
    const isGuestsValid = () => guests !== '';
    const isOccasionValid = () => occasion !== '';

     const areAllFieldsValid = () =>
        isDateValid()
        && isTimeValid()
        && isGuestsValid()
        && isOccasionValid();

    function handleDateChange(e){
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleTimeChange = e => setTime(e.target.value);

    function handleGuestsChange(e){
        setGuests(e.target.value);
    };

    function handleOccasionChange(e){
        setOccasion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({ date, time, guests, occasion, });
    };

    return (
        <div class="booking-main">
            <h1 style={{fontFamily: "Karla", fontWeight: "700", textAlign: "center"}}>Book Now</h1>
            <form style={{fontFamily: "Markazi Text", fontSize: "20pt", fontWeight: "500", gap: "20px", paddingLeft: "20%", paddingRight: "20%"}} onSubmit={handleSubmit}>
                    <FormField
                        aria-label="Date"
                        htmlFor="res-date"
                        hasError={!isDateValid()}
                        errorMessage={invalidDateErrorMessage}
                    > Date
                        <input
                            type="date"
                            id="res-date"
                            name="res-date"
                            min={minimumDate}
                            value={date}
                            aria-required={true}
                            onChange={handleDateChange}
                        />
                    </FormField>
                    <FormField
                        aria-label="Time"
                        htmlFor="res-time"
                        hasError={!isTimeValid()}
                        errorMessage={invalidTimeErrorMessage}
                    > Time
                        <select
                        id="res-time"
                        name="res-time"
                        value={time}
                        aria-required={true}
                        onChange={handleTimeChange}
                        >
                        {availableTimes.map(times =>
                            <option data-testid="res-time-option" key={times}>
                            {times}
                            </option>
                        )}
                        </select>
                    </FormField>
                    <FormField
                        aria-label="Number of guests"
                        htmlFor="guests"
                        hasError={!isGuestsValid()}
                        errorMessage={invalidGuestsErrorMessage}
                    > Number of Guests
                        <input
                        type="number"
                        id="guests"
                        name="guests"
                        value={guests}
                        min={minimumNumberOfGuests}
                        max={maximumNumberOfGuests}
                        aria-required={true}
                        onChange={handleGuestsChange}
                        />
                    </FormField>
                    <FormField
                        aria-label="Occasion"
                        htmlFor="booking-occasion"
                        hasError={!isOccasionValid()}
                        errorMessage={invalidOccasionErrorMessage}
                    > Select Occasion
                        <select
                        id="booking-occasion"
                        name="booking-occasion"
                        value={occasion}
                        aria-required={true}
                        onChange={handleOccasionChange}
                        >
                        {occasions.map(occasion =>
                            <option data-testid="booking-occasion-option" key={occasion}>
                            {occasion}
                            </option>
                        )}
                        </select>
                    </FormField>
                    <button
                        className="button-primary"
                        type="submit"
                        disabled={!areAllFieldsValid()}
                    >
                        Confirm Reservation
                    </button>
            </form>
            <div class="booking-img"><img src={chicagoImage2} alt="tableImage" id="chicagoImage2" /></div>
        </div>

    )
};

export default BookingForm;

