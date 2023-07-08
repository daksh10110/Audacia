import React from "react";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const handleMenuClick = () => {
    // Handle menu click
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "rgba(255, 255, 255, 0.0)",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "#FFFFFF" }}>Navbar</h1>
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/about"
          style={{ textDecoration: "none", color: "#FFFFFF", margin: "0 10px" }}
        >
          About
        </Link>
        <Link
          to="/studio"
          style={{ textDecoration: "none", color: "#FFFFFF", margin: "0 10px" }}
        >
          Studio
        </Link>
        <Link
          to="/lorepumispum"
          style={{ textDecoration: "none", color: "#FFFFFF", margin: "0 10px" }}
        >
          Lorepum Ispum
        </Link>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleMenuClick}
        >
          <SlMenu style={{ color: "#FFFFFF", margin: "0 10px" }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
