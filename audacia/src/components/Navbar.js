import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "rgba(255, 255, 255, 0)", // Transparent background with 50% opacity
        padding: "10px",
        zIndex: 1,
      }}
    >
      <Link to="/">
        <h1 style={{ color: "#000" }}>Navbar</h1> {/* Opaque text color */}
      </Link>
    </nav>
  );
};

export default Navbar;
