import React, { useState } from "react";
import FormField from "./FormField";

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
        //stuff to display
        <div>
            <h1>Book Now</h1>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                    <FormField
                        aria-label="Date"
                        htmlFor="res-date"
                        hasError={!isDateValid()}
                        errorMessage={invalidDateErrorMessage}
                    >
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
                    >
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
                    >
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
                    >
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
                        Make your reservation
                    </button>
            </form>
        </div>

    )
};

export default BookingForm;

