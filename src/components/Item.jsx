import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card p-3 mb-3">
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <Link to={`/item/${product.id}`} className="btn btn-primary">
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
