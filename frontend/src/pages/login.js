import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-card p-4">
        <h5 className="text-white mb-4">Log into your account</h5>

        {/* Username */}
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control input-glass"
            placeholder="Username/Email"
          />
        </div>

        {/* Password */}
        <div className="form-group mb-2">
          <input
            type="password"
            className="form-control input-glass"
            placeholder="Password"
          />
          <small className="text-light float-end mt-1 forgot-link">
            Forgot?
          </small>
        </div>

        {/* Remember me */}
        <div className="form-check mb-4">
          <input type="checkbox" className="form-check-input" id="remember" />
          <label className="form-check-label text-light" htmlFor="remember">
            Remember me
          </label>
        </div>

        {/* Buttons */}
        <button className="btn btn-dark w-100 mb-3 rounded-pill">Log in</button>
        <button className="btn btn-light w-100 rounded-pill">
          <i className="bi bi-facebook me-2"></i> Log in with Facebook
        </button>

        {/* Sign up */}
        <p className="text-center text-light mt-4">
          Don’t have an account?{" "}
          <a href="#" className="signup-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
