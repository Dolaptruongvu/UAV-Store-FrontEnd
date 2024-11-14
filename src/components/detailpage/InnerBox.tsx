// InnerBox.tsx
import React from "react";

const InnerBox: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)", // Less transparent (more opaque)
        padding: "30px", // Adjust padding as needed
        borderRadius: "10px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Stronger shadow for more emphasis
        maxWidth: "1500px", // You can adjust the width to make it thinner
        margin: "0 auto", // Centers the box horizontally
      }}
    >
      {children}
    </div>
  );
};

export default InnerBox;
