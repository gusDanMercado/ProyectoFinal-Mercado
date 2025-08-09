const products = [
  {
    id: "1",
    title: "Laptop",
    category: "electronica",
    description: "Laptop poderosa",
    price: 1500,
  },
  {
    id: "2",
    title: "Camisa",
    category: "ropa",
    description: "Camisa elegante",
    price: 40,
  },
  {
    id: "3",
    title: "Libro React",
    category: "libros",
    description: "Aprendé React",
    price: 25,
  },
];

export const getProducts = () =>
  new Promise((resolve) => setTimeout(() => resolve(products), 500));

export const getProductById = (id) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(products.find((p) => p.id === id)), 500)
  );

export const getProductsByCategory = (category) =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(products.filter((p) => p.category === category)),
      500
    )
  );
