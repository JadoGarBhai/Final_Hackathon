import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="col-12 bimg">
      <h1 id="heading">
        Our Qualified{" "}
        <span style={{ color: "green", fontSize: "2.5rem", fontWeight: "900" }}>
          Doctors
        </span>
      </h1>
    </div>
  );
};

export default Banner;
