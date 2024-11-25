import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import BookingPage from "./BookingPage";
import { MemoryRouter } from "react-router-dom";

describe('Booking form', () => {
  const today = new Date().toISOString().split('T')[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

// test('initializeTimes should return the correct expected value', () => {

/* test('should update available booking time options when changing booking date', async() => {
  render(
    <MemoryRouter>
      <BookingPage></BookingPage>
    </MemoryRouter>
  );

  const bookingDate = '2023-04-01';
  const dateInput = screen.getByLabelText(/Date/);
  const initialTimeOptions = await screen.findAllByTestId('booking-time-option');
  fireEvent.change(dateInput, { target: { value: bookingDate } });
  fireEvent.blur(dateInput);
  const updatedTimeOptions = await screen.findAllByTestId('booking-time-option');

  expect(dateInput).toHaveValue(bookingDate);
  initialTimeOptions.forEach(timeOption =>
    expect(timeOption.value).toMatch(timeFormat)
  );
  updatedTimeOptions.forEach(timeOption =>
    expect(timeOption.value).toMatch(timeFormat)
  );
  expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
});*/
});
