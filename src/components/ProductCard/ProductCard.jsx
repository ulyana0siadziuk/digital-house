import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import starIcon from "../../assets/star.svg";
import styles from "./ProductCard.module.css";

function ProductCard({ title, description, image, price, rating }) {
  const handleAddToCart = () => {
    console.log(`Добавлено в корзину: ${title}`);
  };

  return (
    <article className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          <p className={styles.price}>{price} BYN</p>
          <span className={styles.rating}>
            <img className={styles.star} src={starIcon} alt="" />
            {rating}
          </span>
        </div>
        <QuantitySelector />
        <Button onClick={handleAddToCart} withCartIcon>
          В корзину
        </Button>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ProductCard;
