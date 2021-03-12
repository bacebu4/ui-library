import React from "react";
import { BaceButton } from "@ui-library/BaceButton";

export const App: React.FC = () => {
  return (
    <>
      <h1>Hey</h1>
      <BaceButton>Hey yo</BaceButton>
      <BaceButton isSolid>Hey yo</BaceButton>
    </>
  );
};
