// ItemDetail.jsx
import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "./CartContext";

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(
      { id: product.id, title: product.title, price: product.price },
      qty
    );
    setAdded(true); // oculta ItemCount
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image || "/assets/default.png"}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>
            <strong>Precio:</strong> ${product.price}
          </p>
          {product.stock <= 0 && (
            <div className="alert alert-warning">Producto sin stock</div>
          )}
          {!added && product.stock > 0 && (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
          )}
          {added && (
            <div className="mt-3">
              <p className="text-success">Producto agregado al carrito</p>
              <a href="/cart" className="btn btn-success">
                Ir al carrito
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
