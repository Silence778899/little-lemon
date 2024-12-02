import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './HomePage';
import reportWebVitals from './reportWebVitals';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/BookingPage" Component={BookingPage}>
            </Route>
            <Route path="/Homepage" Component={HomePage}>
            </Route>
            <Route path="/ConfirmedBooking" Component={ConfirmedBooking}>
            </Route>
            <Route path="/" Component={HomePage}>
            </Route>
            <Route path="/{little-lemon}" Component={HomePage}>
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);

// add <Route path + Component> + import the component. will match URL


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();