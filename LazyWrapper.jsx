import React, { useState, Suspense } from "react";
import "./Spinner.css"; // For the spinner CSS

// Lazy load the component
const LazyLoadedComponent = React.lazy(() => import("./LazyLoadedComponent"));

const LazyWrapper = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Lazy Loading with Suspense Spinner</h1>
      <button
        onClick={handleButtonClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#e50914",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Load Lazy Component
      </button>

      {/* Conditionally render the lazy-loaded component */}
      {showComponent && (
        <Suspense
          fallback={
            <div style={{ marginTop: "20px" }}>
              <div className="spinner"></div>
            </div>
          }
        >
          <LazyLoadedComponent />
        </Suspense>
      )}
    </div>
  );
};

export default LazyWrapper;
