import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewDoctor.css";
import Banner from "./Banner/Banner";
import Navbar from "../../Navbar/Navbar";

const ViewDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  const getDoctors = async () => {
    const doctorList = await axios.get("http://localhost:8080/");
    setDoctors(doctorList.data);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  console.log(setDoctors);

  return (
    <div>
      <Navbar />
      <Banner />

      <div className="container-fluid">
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
                <a href="#" className="btn">
                  Appointment
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ViewDoctor;
