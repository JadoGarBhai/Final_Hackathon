import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ViewDoctor from "../Pages/Doctor/ViewDoctor";
import Admin from "../Admin/Admin";
import Doctor from "../Admin/Doctor/Doctor";
import Appointments from "../Admin/Appointment/Appointments";
import Auth from "../Admin/Auth/Auth";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/doctor" element={<ViewDoctor />} />
          <Route path="/admin" element={<Auth />} />
          <Route path="/admindashboard" element={<Admin />} />
          <Route path="/admindoctor" element={<Doctor />} />
          <Route path="/adminappointments" element={<Appointments />} />
          <Route path="*" element={<h1>No Page Found</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
