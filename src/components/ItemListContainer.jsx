import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../products";
import ItemList from "../components/ItemList";

import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      try {
        const col = collection(db, "products");
        let q = col;
        if (categoryId) q = query(col, where("category", "==", categoryId));
        const snapshot = await getDocs(q);
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [categoryId]);

  return (
    <div className="container mt-4">
      {saludo && <h2 className="mb-3">{saludo}</h2>}
      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
      {!loading && items.length === 0 && (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
