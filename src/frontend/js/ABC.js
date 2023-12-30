// ABC.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ABC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Use queryParams to get the values
  const adults = queryParams.get('adults');
  const kids = queryParams.get('kids');
  const checkIn = queryParams.get('checkIn');
  const checkOut = queryParams.get('checkOut');

  return (
    <div>
      <h2>ABC Page</h2>
      <p>Adults: {adults}</p>
      <p>Kids: {kids}</p>
      <p>Check-In Date: {checkIn}</p>
      <p>Check-Out Date: {checkOut}</p>
      {/* Additional content for the ABC page */}
    </div>
  );
};

export default ABC;
