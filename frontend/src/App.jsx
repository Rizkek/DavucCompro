import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/User/Home.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/Footer.jsx'; 

//admin
import Login from './pages/Admin/LoginAdmin.jsx';
import Register from './pages/Admin/RegisterAdmin.jsx';
import DashboardAdmin from './pages/Admin/Dashboard.jsx';
import LayananProduk from "./pages/Admin/LayananProduk.jsx";
import Proyek from "./pages/Admin/Proyek.jsx";
import Perusahaan from "./pages/Admin/Perusahaan.jsx";

//Components
import Sidebar from "./components/Sidebar.jsx";

//Layout untuk halaman Admin
const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* Navbar & Footer hanya muncul di halaman selain Login */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

         {/* Halaman admin (otomatis tampil Sidebar) */}
        <Route path="/DashboardAdmin" element={<AdminLayout>
              <DashboardAdmin />
            </AdminLayout>} />
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