import React from "react";
import { BaceButton, BaceInput } from "@ui-library/index";

export const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "0 auto",
        justifyContent: "space-around",
        height: "100vh",
        flex: 1,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <BaceButton>Usual Button</BaceButton>
      </div>
      <div style={{ textAlign: "center" }}>
        <BaceButton isSolid>Solid Button</BaceButton>
      </div>
      <div style={{ textAlign: "center" }}>
        <BaceInput placeholder="Some placeholder" />
      </div>
    </div>
  );
};
