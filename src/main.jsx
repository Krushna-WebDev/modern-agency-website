import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Services from "./Components/Services.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Components/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <Hero/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    <App />
  </>
);
