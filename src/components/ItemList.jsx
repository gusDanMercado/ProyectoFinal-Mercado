// ItemList.jsx
import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map((product) => (
        <div className="col-md-4 mb-3" key={product.id}>
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};
export default ItemList;
