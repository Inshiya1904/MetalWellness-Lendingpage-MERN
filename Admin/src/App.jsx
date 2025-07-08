import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import PackageList from "./components/PackageList";
import AddPackage from "./components/AddPackage";
import EditPackage from "./components/EditPackage";
import RequireAuth from "./components/RequireAuth";
import AdminRegister from "./components/AdminRegister";
import { Toaster } from 'react-hot-toast';
import EnquiryList from "./components/EnquiryList";

const App = () => (
  <>
  <Toaster position="top-center" reverseOrder={false} />
   <Router>
    <Routes>
      <Route path="/" element={<AdminLogin/>} />
      {/* <Route path="/admin/register" element={<AdminRegister />} /> */}
      <Route path="/admin/pricing" element={<RequireAuth><PackageList /></RequireAuth>} />
      <Route path="/admin/pricing/add" element={<RequireAuth><AddPackage /></RequireAuth>} />
      <Route path="/admin/pricing/edit/:id" element={<RequireAuth><EditPackage /></RequireAuth>} />
      <Route path="/admin/enquiry/list" element={<RequireAuth><EnquiryList/></RequireAuth>} />
    </Routes>
  </Router>
  </>
 
);

export default App;
