import React from "react";

const LazyLoadedComponent = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: "8px",
      }}
    >
      <h2>Lazy Loaded Content</h2>
      <p>This content is loaded dynamically when you click the button!</p>
    </div>
  );
};

export default LazyLoadedComponent;
