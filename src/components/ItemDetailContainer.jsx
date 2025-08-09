import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchProduct() {
      try {
        const docRef = doc(db, "products", itemId);
        const snap = await getDoc(docRef);
        if (snap.exists()) setProduct({ id: snap.id, ...snap.data() });
        else setProduct(null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [itemId]);

  if (loading) return <p className="text-center mt-5">Cargando producto...</p>;
  if (!product)
    return <p className="text-center mt-5">Producto no encontrado</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
