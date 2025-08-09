import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  return (
    <div>
      <button onClick={() => setCantidad((c) => Math.max(c - 1, 1))}>-</button>
      <span className="mx-2">{cantidad}</span>
      <button onClick={() => setCantidad((c) => Math.min(c + 1, stock))}>
        +
      </button>
      <br />
      <button onClick={() => onAdd(cantidad)} className="btn btn-success mt-2">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
