import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className=" bg-gray-800 text-white p-4 ">
      {/* Left Side: Title */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/admin/pricing">
          <div className="text-xl font-bold">Admin Dashboard</div>
        </Link>

        {/* Right Side: Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/admin/pricing/add"
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
          >
            Add Package
          </Link>

          <Link
            to="/admin/enquiry/list"
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
          >
            Enquiries
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
