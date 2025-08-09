// Item.jsx
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card h-100">
      <img
        src={product.image || "/assets/default.png"}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column">
        <h5>{product.title}</h5>
        <p className="text-muted">${product.price}</p>
        <p className="flex-grow-1">{product.description?.slice(0, 80)}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary mt-auto">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};
export default Item;
