import React from "react";
import { Link } from "react-router-dom";

const Arrow = ({ path }) => {
  return (
    <div className="col-12 bg-secondary p-3">
      <Link to={path} style={{ color: "#000" }}>
        <i class="fa-solid fa-arrow-left"></i>
      </Link>
    </div>
  );
};

export default Arrow;
