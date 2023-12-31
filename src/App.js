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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
