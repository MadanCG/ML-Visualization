import React from "react";
import asset from "../../constants/assets";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        padding: "10px 30px",
        backgroundColor: asset.colors.deepBlue,
      }}
    >
      <h2 style={{ color: asset.colors.lightLemon }}>ML-Visualization</h2>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "25px",
        }}
      >
        <a href="#" style={linkStyle}>
          Home
        </a>

        <a href="#" style={linkStyle}>
          About us
        </a>

        <a href="#" style={linkStyle}>
          Login
        </a>

        <a href="#" style={linkStyle}>
          Login
        </a>
      </ul>
    </nav>
  );
}
const linkStyle = {
  textDecoration: "none",
  color: asset.colors.lightLemon,
};
