import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

function ProductList({ products, onDelete, onEdit }) {
  return (
    <div className={styles.list}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ProductList;