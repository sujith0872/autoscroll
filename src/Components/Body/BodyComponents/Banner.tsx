import * as React from "react";

export const Banner: React.FC<{ currentIndex: number }> = ({
  currentIndex,
}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
      key={currentIndex}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          opacity:'0%',
          backgroundImage: "linear-gradient(0deg, blue, lightblue,lightblue,blue)",
          animation: 'fade 5s linear'
        }}
        className="Start-right"
      >
        Corrosal {currentIndex}
      </div>
    </div>
  );
};
