import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import Her from './components/Her/her';
import Him from './components/Him/him';
import Home from './components/Home/home';
import Sale from './components/Sale/sale';
import Navbar from './components/Navbar';





const App = () => {
    return(
        <>
        
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/her" element={<Her/>} />
                <Route path="/him" element={<Him />} />
                <Route path="/sale" element={<Sale />} />
                <Route path='checkout'element={<Checkout />} />
            </Routes>
        </Router>

        </>
    );

};

export default App;
