import React, { useState } from "react";
import Home from "./Home";
import Cart from "./Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState("home"); // Controls the displayed page

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <button
          onClick={() => setCurrentPage("home")}
          className={currentPage === "home" ? "active" : ""}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage("cart")}
          className={currentPage === "cart" ? "active" : ""}
        >
          Cart ({cart.length})
        </button>
      </nav>

      {/* Page Content */}
      {currentPage === "home" ? (
        <Home addToCart={addToCart} />
      ) : (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
};

export default App;

