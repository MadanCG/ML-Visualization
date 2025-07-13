import React from "react";
import asset from "../../constants/assets";
import Button from "../../components/Button";

export default function AboutPage() {
  return (
    <div
      style={{
        background: asset.colors.MintLemon,
        padding: "10px 20px",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          color: asset.colors.deepBlue,
          marginBottom: "10px",
        }}
      >
        ABOUT US
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px", padding: "20px" }}>
          <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
            <strong>ML Visualizer</strong> is a web platform where users can
            upload datasets, apply machine learning algorithms, and understand
            results through rich visualizations.
          </p>

          <Button
            label="Learn More"
            onClick={() => alert("Project now begins!")}
          />
        </div>

        <div
          style={{
            minWidth: "300px",
          }}
        >
          <img
            src={asset.images.about}
            alt="ml"
            style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
