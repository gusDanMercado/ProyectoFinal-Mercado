// Cart.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

const Cart = () => {
  const { cart, removeItem, clear, getTotalQty, getTotalPrice } = useCart();

  if (cart.length === 0)
    return (
      <div className="container mt-4">
        <h3>Carrito vacío</h3>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );

  return (
    <div className="container mt-4">
      <h3>Tu carrito ({getTotalQty()} items)</h3>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.title}</strong>
              <br />
              <small>
                ${item.price} x {item.qty}
              </small>
            </div>
            <div>
              <span className="me-3">${item.price * item.qty}</span>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeItem(item.id)}
              >
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h4>Total: ${getTotalPrice()}</h4>
      <button className="btn btn-outline-danger me-2" onClick={clear}>
        Vaciar carrito
      </button>
      <div className="mt-4">
        <CheckoutForm />
      </div>
    </div>
  );
};
export default Cart;
