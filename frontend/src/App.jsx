import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/User/Home.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/Footer.jsx'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;