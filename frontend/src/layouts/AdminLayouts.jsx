import React from "react";
import Sidebar from "../components/Sidebar.jsx";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full min-h-screen bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;