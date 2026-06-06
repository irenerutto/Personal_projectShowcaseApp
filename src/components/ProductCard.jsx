import styles from "./ProductCard.module.css";

function ProductCard({ product, onDelete, onEdit }) {
  return (
    <div className={styles.card}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Origin: {product.origin}</p>
      <p>${product.price}</p>

      {onEdit && (
        <button className={styles.button} onClick={() => onEdit(product)}>
          Edit
        </button>
      )}

      {onDelete && (
        <button className={styles.button} onClick={() => onDelete(product.id)}>
          Delete
        </button>
      )}
    </div>
  );
}

export default ProductCard;