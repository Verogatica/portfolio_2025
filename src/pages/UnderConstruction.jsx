import React from "react";

const UnderConstruction = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg,rgb(36, 87, 255),rgb(201, 40, 255))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}> Sitio en construcción :) </h1>
    </div>
  );
};

export default UnderConstruction;
