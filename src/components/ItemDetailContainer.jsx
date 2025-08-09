import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../products";
import ItemCount from "../components/ItemCount";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setProducto);
  }, [itemId]);

  return (
    <div className="container mt-5">
      {producto ? (
        <>
          <h2>{producto.title}</h2>
          <p>{producto.description}</p>
          <p>
            <strong>Precio:</strong> ${producto.price}
          </p>
          <ItemCount
            stock={10}
            initial={1}
            onAdd={(qty) => console.log(`Agregado ${qty}`)}
          />
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
