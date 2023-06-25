import * as React from "react";
import { CorrosalCount } from "../../../Utils/Enums";
import { Banner } from "./Banner";
import { useCorrosal } from "../../../Utils/hooks/useCorrosal";

export const Corrosal: React.FC = () => {
  const { currentIndex, handleNext, handlePrev } = useCorrosal(
    CorrosalCount,5000
  );

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "row", height: "60vh" }}>
        <button
          title="<"
          type="button"
          onClick={handlePrev}
          className="Corrosal-button Corrosal-button-left"
        >
          {"<"}
        </button>
        <Banner currentIndex={currentIndex} />
        <button
          title=">"
          type="button"
          onClick={handleNext}
          className="Corrosal-button Corrosal-button-right"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
