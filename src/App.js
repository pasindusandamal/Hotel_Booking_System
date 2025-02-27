import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./frontend/js/Navbar";
import Banner from "./frontend/js/Banner";
import Header from "./frontend/js/Header";
import Room from "./frontend/js/Room";
import Offer from "./frontend/js/Offer";
import Footer from "./frontend/js/Footer";
import Booking from "./frontend/js/Booking";
import Calendar from "./frontend/js/Calendar";
import ABC from "./frontend/js/ABC";
import Accommodation from "./frontend/js/Accommodation";
import "bootstrap/dist/css/bootstrap.min.css";
import Stripe from "./frontend/js/Stripe";
import Form from "./frontend/js/Form";
import RegisterForm from "./frontend/js/RegisterForm";
import LoginForm from "./frontend/js/LoginForm";
import Reservation from "./frontend/js/ReservationList";
import Gallery from "./frontend/js/Gallery";
import Users from "./frontend/js/Users";
import ReservationList from "./frontend/js/ReservationList";
import Admin from "./frontend/js/Admin";

function Bookingsection() {
  return <Booking />;
}

function Calandarsection() {
  return <Calendar />;
}

function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Header />
      <Room />
      <Offer />
      <Gallery/>
      <Footer />
     
     
      
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Bookingsection />} />
        <Route path="/calendar" element={<Calandarsection />} />
        <Route path="/abc" element={<ABC />} />
        <Route path="/acc" element={<Accommodation />} />
        <Route path="/str" element={<Stripe />} />
        <Route path="/frm" element={<Form />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/reservation" element={<ReservationList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Admin />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
