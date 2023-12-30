import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useLocation } from 'react-router-dom';
import '../css/Calendar.css';

const CalendarStep = ({ title, selectedDate, onChange }) => (
  <div className="calendar-step">
    <h3>{title} Date</h3>
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      placeholderText={`Select ${title} Date`}
      inline
      className="custom-calendar"
    />
    <input type="text" value={selectedDate ? selectedDate.toDateString() : ''} readOnly />
    <div className="button-container">
      <button onClick={() => onChange(null)}>Clear</button>
    </div>
  </div>
);

const Calendar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const adults = queryParams.get('adults');
  const kids = queryParams.get('kids');

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="booking-container">
      <h2>Select Dates</h2>

      <div className="calendar-container">
        <CalendarStep
          title="Check-In"
          selectedDate={checkInDate}
          onChange={(date) => setCheckInDate(date)}
        />
        <CalendarStep
          title="Check-Out"
          selectedDate={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
        />
      </div>

      <div className="button-container">
        <button onClick={() => setCheckOutDate(null)}>Back</button>
      </div>

      <div className="button-container-1">
        <button>
          <Link to={`/abc?adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}>
            Next
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Calendar;
