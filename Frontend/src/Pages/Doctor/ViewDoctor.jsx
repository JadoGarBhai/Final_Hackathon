import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewDoctor.css";
import Banner from "./Banner/Banner";
import Navbar from "../../Navbar/Navbar";

const ViewDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointmentForm, setAppointmentForm] = useState({
    doctorName: "",
    specialization: "",
    timing: "",
    patientName: "",
    number: "",
    date: "",
  });

  const handleChange = (e) => {
    setAppointmentForm({ ...appointmentForm, [e.target.name]: e.target.value });
  };

  const getDoctors = async () => {
    const doctorList = await axios.get("http://localhost:8080/");
    setDoctors(doctorList.data);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const editHandle = (doctor) => {
    setAppointmentForm({
      doctorName: doctor.name,
      specialization: doctor.specialization,
      timing: doctor.timing,
      patientName: "",
      number: "",
      date: "",
    });
  };

  const sendAppointment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/addAppointments",
        appointmentForm
      );
      console.log("Appointment sent successfully", response.data);
      // You can perform additional actions here, such as showing a success message.
    } catch (error) {
      console.error("Error sending appointment", error);
      // You can handle errors here, such as showing an error message.
    }
  };

  return (
    <div>
      <Navbar />
      <Banner />

      <div className="container-fluid d-flex justify-content-center align-items-center gap-3">
        {doctors.map((doctor) => (
          <section className="main" key={doctor.id}>
            <div className="profile-card">
              <div className="image">
                <img
                  src="https://img.freepik.com/premium-vector/white-man-logo-design-man-with-suit-hat_498048-816.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702166400&semt=ais"
                  alt=""
                  className="profile-pic"
                />
              </div>
              <div className="data">
                {/* name */}
                <h2>{doctor.name}</h2>
                {/* specialization */}
                <span className="my-0">{doctor.specialization}</span>
              </div>
              <div className="row">
                <div className="info">
                  {/* timing */}
                  <h3>Timing</h3>
                  <span>{doctor.timing}</span>
                </div>
                <div className="info mt-2">
                  <h3>Fee</h3>
                  <span>{doctor.fee}</span>
                </div>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="btn btn-sm btn-primary me-1"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => editHandle(doctor)}
                >
                  Update
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* UPDATE MODEL. */}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Send Appointment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Doctor Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Doctor Name"
                  required
                  value={appointmentForm.doctorName}
                  name="doctorName"
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Specialization
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Specialization"
                  name="specialization"
                  value={appointmentForm.specialization}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Timing
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Timing"
                  name="timing"
                  value={appointmentForm.timing}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  PatientName
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Patient Name"
                  name="patientName"
                  value={appointmentForm.patientName}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Patient Contact
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Number"
                  name="number"
                  value={appointmentForm.number}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date"
                  name="date"
                  value={appointmentForm.date}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={sendAppointment}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////// */}
    </div>
  );
};

export default ViewDoctor;
