import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping, onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Helper to parse numeric unit price whether cost is "$15" or 15
  const parseCost = (cost) => {
    if (typeof cost === 'number') return cost;
    return parseFloat(cost.toString().replace('$', '')) || 0;
  };

  // Calculate total cost for an individual plant in the cart
  const calculateTotalCost = (item) => {
    return parseCost(item.cost) * item.quantity;
  };

  // Calculate grand total amount for all plants in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + calculateTotalCost(item), 0);
  };

  // Handle quantity increment
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle quantity decrement (removes item if quantity drops to 0)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Handle item deletion from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Handle checkout button click
  const handleCheckout = () => {
    alert('Coming Soon! Thank you for your interest in Paradise Nursery.');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button className="continue-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-price">Unit Price: {item.cost}</div>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecrement(item)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncrement(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-item-total">
                  Subtotal: ${calculateTotalCost(item).toFixed(2)}
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleRemove(item)}
                  aria-label="Remove item"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            Total Cart Amount: <span>${calculateTotalAmount().toFixed(2)}</span>
          </div>

          <div className="cart-actions">
            <button className="continue-btn" onClick={onContinueShopping}>
              Continue Shopping
            </button>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
