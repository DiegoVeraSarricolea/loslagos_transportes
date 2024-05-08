// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Pricing from './components/Pricing';
import About from './components/About';
import Reserve from './components/Reserve';
//import Contact from './components/Contact';
//import NotFound from './components/NotFound';

const RoutesWeb = () => {
    return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Pricing />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/reservar" element={<Reserve />} />
        </Routes>
    </Router>
    );
}

export default RoutesWeb;