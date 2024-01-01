import StripeCheckout from "react-stripe-checkout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLocation, useNavigate } from "react-router-dom"; // Updated import

const Payment = () => {
  const navigate = useNavigate(); // Updated to useNavigate
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const selectedValue = queryParams.get("selectedValue");

  const MySwal = withReactContent(Swal);
  const publishableKey =
    "pk_test_51OSbjxId2jxCFuVbX7Zs05WrqWYRVUGo0ejcCdqhnslb9wZ7yrrsV2H35U4iu7cFGzkmENOQQY4P2tujfFU3Muyn00WOOxGkXf";
  const [product, setProduct] = useState({
    name: "Headphone",
    price: selectedValue ? parseFloat(selectedValue) : 5,
  });
  const priceForStripe = product.price * 100;

  useEffect(() => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      price: selectedValue ? parseFloat(selectedValue) : 5,
    }));
  }, [selectedValue]);

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
    });

    navigate("/form"); // Updated navigation
  };

  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      time: 4000,
    });
  };

  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:5000/payment",
        method: "post",
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <div className="container">
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is $${product.price}`}
        token={payNow}
      />
    </div>
  );
};

export default Payment;
