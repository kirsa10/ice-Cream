import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Services from './Services';
import Signup from './Signup';
//import Footer from './Footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup"  element={<Signup/>}/>
      </Routes>
     
    </Router>
  );
}

export default App;
