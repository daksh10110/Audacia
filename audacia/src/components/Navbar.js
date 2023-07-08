import React from "react";
import { Link } from "react-router-dom";

import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "rgba(255, 255, 255, 0.0)", // Transparent background with 50% opacity
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          <h1>Navbar</h1>
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/about"
          style={{ textDecoration: "none", color: "#000", margin: "0 10px" }}
        >
          About
        </Link>
        <Link
          to="/studio"
          style={{ textDecoration: "none", color: "#000", margin: "0 10px" }}
        >
          Studio
        </Link>
        <Link
          to="/lorepumispum"
          style={{ textDecoration: "none", color: "#000", margin: "0 10px" }}
        >
          Lorepum Ispum
        </Link>
        <button style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <SlMenu style={{ margin: "0 10px"}}/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
