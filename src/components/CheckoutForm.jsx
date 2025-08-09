import React, { useState } from "react";
import { useCart } from "./CartContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CheckoutForm = () => {
  const { cart, getTotalPrice, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const order = {
        buyer,
        items: cart,
        total: getTotalPrice(),
        createdAt: serverTimestamp(),
      };
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clear();
    } catch (err) {
      console.error(err);
      alert("Error al generar la orden");
    } finally {
      setLoading(false);
    }
  };

  if (orderId)
    return (
      <div className="alert alert-success">
        Compra finalizada. ID de la orden: <b>{orderId}</b>
      </div>
    );

  return (
    <form onSubmit={handleSubmit}>
      <h5>Finalizar compra</h5>
      <div className="mb-2">
        <input
          className="form-control"
          placeholder="Nombre"
          value={buyer.name}
          onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
          required
        />
      </div>
      <div className="mb-2">
        <input
          className="form-control"
          placeholder="Email"
          value={buyer.email}
          onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
          required
        />
      </div>
      <button
        className="btn btn-success"
        type="submit"
        disabled={loading || cart.length === 0}
      >
        {loading ? "Procesando..." : "Confirmar compra"}
      </button>
    </form>
  );
};

export default CheckoutForm;
