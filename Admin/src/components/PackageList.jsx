import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import API from "../services/api";
import AdminNavbar from "./Navbar";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  const fetchPackages = async () => {
    const res = await API.get("/pricing/admin");
    setPackages(res.data);
  };

  const handleDelete = async (id) => {
    console.log(id);
    if (window.confirm("Delete this package?")) {
      await API.delete(`/pricing/delete/${id}`);
      fetchPackages();
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="max-w-3xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Packages List</h2>

        {packages.map((pkg) => (
          <div key={pkg.id} className="border p-4 rounded mb-4">
            <h3 className="text-xl font-semibold">
              {pkg.name} (${pkg.price})
            </h3>
            <p>{pkg.description}</p>
            <ul className="list-disc ml-6">
              {pkg.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <div className="mt-2 flex gap-4">
              <Link
                to={`/admin/pricing/edit/${pkg._id}`}
                className="text-blue-500 underline"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(pkg._id)}
                className="text-red-500 underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PackageList;
