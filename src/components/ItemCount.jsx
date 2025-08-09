// ItemCount.jsx
import React, { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const increment = () => setQty((q) => Math.min(q + 1, stock));
  const decrement = () => setQty((q) => Math.max(1, q - 1));

  return (
    <div>
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-secondary" onClick={decrement}>
          -
        </button>
        <span className="mx-3">{qty}</span>
        <button className="btn btn-outline-secondary" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="btn btn-primary mt-2"
        onClick={() => onAdd(qty)}
        disabled={stock <= 0}
      >
        Agregar al carrito
      </button>
      {stock <= 3 && stock > 0 && (
        <small className="text-warning ms-2">¡Quedan pocas unidades!</small>
      )}
    </div>
  );
};

export default ItemCount;
