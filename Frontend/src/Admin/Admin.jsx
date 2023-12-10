import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="vh-100 col-10 container-fluid d-flex flex-column">
        <div className="col-5">
          <Link to={"/admindoctor"}>
            <button className="btn btn-primary col-12">Manage Doctors</button>
          </Link>
        </div>

        <div className="col-5 py-5">
          <Link to={"/adminappointments"}>
            <button className="btn btn-success col-12">
              View Appointments
            </button>
          </Link>
        </div>

        <div className="col-5">
          <Link to={"/"}>
            <button className="btn btn-secondary col-12">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
