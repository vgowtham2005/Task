
import './Cart.css';
const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      <img 
        src="https://imgcdn.stablediffusionweb.com/2024/3/13/b3bb013e-d551-44e7-8ab2-1ed2b5fa6055.jpg" // Replace with the actual image path
        alt="Cart Icon"
        className="cart-top-image"
      />
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3 className="cart-name">{item.name}</h3>
                <p className="cart-price">${item.price}</p>
              </div>
              <button
                className="cart-remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Checkout Section */}
      <div className="checkout-container">
        <p className="total-price">Total: ${totalPrice}</p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;


