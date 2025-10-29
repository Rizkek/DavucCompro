import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/User/Home.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/Footer.jsx'; 

//admin
import Login from './pages/Admin/LoginAdmin.jsx';
import Register from './pages/Admin/RegisterAdmin.jsx';
import DashboardAdmin from './pages/Admin/Dashboard.jsx';

function App() {
  return (
    <Router>
      {/* Navbar & Footer hanya muncul di halaman selain Login */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;