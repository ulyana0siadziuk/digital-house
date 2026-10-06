import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import styles from "./ProductCard.module.css";

function ProductCard({ title, description, image, price }) {
  const handleAddToCart = () => {
    console.log(`Добавлено в корзину: ${title}`);
  };

  return (
    <article className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price} BYN</p>
        <QuantitySelector />
        <Button onClick={handleAddToCart}>В корзину</Button>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
