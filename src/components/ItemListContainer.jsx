import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = collection(db, "products");
        const snapshot = await getDocs(productosRef);
        if (snapshot.empty) {
          console.log("No hay productos");
        } else {
          const lista = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProductos(lista);
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (productos.length === 0) return <p>No hay productos en esta categoría.</p>;

  return (
    <div>
      {productos.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.description}</h3>
          <p>Precio: {prod.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
