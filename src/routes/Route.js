
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';
// import Home from '../pages/Home';

const RoutesComponents = () => {
    return (
        <>
            <Router basename="/"  >
                <Routes>
                    <Route path="/" element={<Registration />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    {/* <Route path="/Home" element={<Home />} /> */}
                </Routes>
            </Router>
            
        </>
    )
}

export default RoutesComponents;