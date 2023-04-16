import React from 'react';
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/pages/home';
import Her from './components/pages/her';
import Him from './components/pages/him';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sale from './components/pages/sale';
import Basket from './components/pages/basket';

const App = () => {
    return(
        <>
        
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/her" element={<Her />} />
                <Route path="/him" element={<Him />} />
                <Route path="/sale" element={<Sale />} />
                <Route path="/basket" element={<Basket/>}/>
            </Routes>
        </Router>

        </>
    );

};

export default App;
