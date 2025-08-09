import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import products from "./cargarProductos.json"; // importa el JSON

async function uploadProducts() {
  try {
    for (const product of products) {
      await addDoc(collection(db, "products"), product);
      console.log(`Producto agregado: ${product.title}`);
    }
    console.log("Todos los productos fueron agregados a Firestore.");
  } catch (error) {
    console.error("Error al subir productos:", error);
  }
}

uploadProducts();
