import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WorkingStep from "./components/WorkingStep";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'

import WhatsAppFloat from "./components/WhatsAppFloat ";
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
    
    <Navbar />
    <Hero />
    <Services />
    <About />
    <WorkingStep />
    <Pricing />
    <Testimonial />
    <Contact />
    <Footer />
    <WhatsAppFloat />
  </>
  );
};

export default App;
