import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [name, setName]   = useState(localStorage.getItem("name"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken(null);
    setName(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/logo.svg" alt="" style={{ width: "28%" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex w-100" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">Support</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!token ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/register">SignUp</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item d-flex align-items-center me-3">
                    <span style={{ color: "#555", fontSize: "14px" }}>
                      Hi, {name} 
                    </span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;