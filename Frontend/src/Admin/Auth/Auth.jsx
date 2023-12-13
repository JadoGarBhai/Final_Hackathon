import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = { email: "", password: "" };

const Auth = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = state;
    if (email.includes("admin@gmail.com") && password.includes("admin123")) {
      window.toastify("Admin Logged in Successfuly!!", "success");
      navigate("/admindashboard");
    } else {
      window.toastify("Invalid Email or Passworsd", "error");
    }
  };
  return (
    <div
      className="bg-primary vh-100 col-12 d-flex justify-content-center align-items-center"
      style={{ color: "#fff" }}
    >
      <div className="card col-5" style={{ backgroundColor: "#fff" }}>
        <form className="container p-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="admin@example.com"
              onChange={handleChange}
              name="email"
              value={state.email}
            />
          </div>

          <div class="mb-5">
            <label for="exampleFormControlInput1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={state.password}
            />
          </div>

          <div>
            <button className="btn btn-primary col-12" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
