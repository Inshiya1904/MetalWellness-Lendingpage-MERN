import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import AdminNavbar from "./Navbar";

const EnquiryList = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await API.get("/enquiry/list");
        setEnquiries(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEnquiries();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
          Customer Enquiries
        </h2>
        <div className="bg-white shadow rounded p-4">
          {enquiries.length === 0 ? (
            <p>No enquiries found.</p>
          ) : (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-green-200 text-pink-500">
                  <th className="border-2 px-2 py-1">S.No.</th>
                  <th className="border-2 px-2 py-1">Name</th>
                  <th className="border-2 px-2 py-1">Email</th>
                  <th className="border-2 px-2 py-1">Phone</th>
                  <th className="border-2 px-2 py-1">Country</th>
                  <th className="border-2 px-2 py-1">Message</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((e, i) => (
                  <tr className="text-center" key={i}>
                    <td className="border-2 px-2 py-1">{i + 1}</td>
                    <td className="border-2 px-2 py-1">{e.name}</td>
                    <td className="border-2 px-2 py-1">{e.email}</td>
                    <td className="border-2 px-2 py-1">{e.phone}</td>
                    <td className="border-2 px-2 py-1">{e.country}</td>
                    <td className="border-2 px-2 py-1">{e.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default EnquiryList;
