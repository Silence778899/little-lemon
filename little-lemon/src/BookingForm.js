import React, { useState } from "react";

const BookingForm = ({availableTimes, dispatchOnDateChange, submitData}) => {

    const minimumDate = new Date().toISOString().split('T')[0];
    const defaultTime = availableTimes[0];
    const minimumNumberOfGuests = 1;
    const maximumNumberOfGuests = 10;
    const occasions = ['Birthday', 'Anniversary'];

    // should have a bunch of anti error consts

    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState(defaultTime);
    const [guests, setGuests] = useState(minimumNumberOfGuests);
    const [occasion, setOccasion] = useState(occasions[0]);


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
        submitData({ date, time, guests, occasion, });
    };

    return (
        //stuff to display
        // add a bunch of req/error related logic
        <div>
            <heading>Book Now</heading>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" onChange={handleDateChange}/>

                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={time} required={true} onChange={handleTimeChange}>
                        {availableTimes.map(times => (
                        <option data-testid="booking-time-option" key={times}>
                            {times}
                        </option>
                        ))}
                    </select>

                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" min={minimumNumberOfGuests} max={maximumNumberOfGuests} id="guests" value={guests} required={true} onChange={handleGuestsChange}/>

                    <label htmlFor="occasion">Occasion</label>
                    <select id="booking-occasion" name="booking-occasion" value={occasion} required={true} onChange={handleOccasionChange}>
                        {occasions.map(occasion =>
                        <option data-testid="booking-occasion-option" key={occasion}>
                        {occasion}
                        </option>
                        )}
                    </select>
                    <input type="submit" value="Make Your reservation"/>
            </form>
        </div>

    )
};

export default BookingForm;

