import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const handleAdultsChange = (e) => {
    setAdults(parseInt(e.target.value, 10));
  };

  const handleKidsChange = (e) => {
    setKids(parseInt(e.target.value, 10));
  };

  return (
    <div className="booking-container">
      <h2>Booking Details</h2>
      <div className="dropdown-container">
        <label htmlFor="adults">Adults:</label>
        <select id="adults" onChange={handleAdultsChange} value={adults}>
          {[...Array(10)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown-container">
        <label htmlFor="kids">Kids:</label>
        <select id="kids" onChange={handleKidsChange} value={kids}>
          {[...Array(5)].map((_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </div>

      {/* Additional Booking Form Elements can be added here */}

      <button className="book-button">
        <Link to={`/calendar?adults=${adults}&kids=${kids}`}>Proceed to Calendar</Link>
      </button>
    </div>
  );
};

export default Booking;
