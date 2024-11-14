// Background.tsx
import React from "react";

const Background: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed", // Keeps the background fixed during scrolling
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1, // Makes sure the background stays behind all other content
        backgroundImage: "url(https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", // Replace with your image path
        backgroundSize: "cover", // Ensures the background covers the whole area
        backgroundPosition: "center", // Centers the background image
        backgroundAttachment: "fixed", // Ensures the background doesn't scroll with the page
        height: "100%", // Ensure it takes up the full height of the screen
      }}
    />
  );
};

export default Background;
