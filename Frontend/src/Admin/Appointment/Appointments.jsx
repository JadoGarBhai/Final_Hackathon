// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import axios from "axios";

import Arrow from "../../Navbar/Arrow";

const AppointmentsList = () => {
  // State to store the appointments
  const [appointments, setAppointments] = useState([]);

  // Function to fetch appointments from the backend
  const getAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/appointment");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments", error);
    }
  };

  // Use useEffect to fetch appointments when the component mounts
  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div>
      <Arrow path={"/admindashboard"} />
      <h1 className="text-center m-5">Appointments List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Doctor Name</th>
            <th scope="col">Specialization</th>
            <th scope="col">Timing</th>
            <th scope="col">Patient Name</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.doctorName}</td>
              <td>{appointment.specialization}</td>
              <td>{appointment.timing}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.number}</td>
              <td>{appointment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsList;
