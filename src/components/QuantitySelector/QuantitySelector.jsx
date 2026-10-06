import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./QuantitySelector.module.css";

function QuantitySelector({ min = 1, max = 99 }) {
  const [quantity, setQuantity] = useState(min);

  const decrease = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className={styles.selector}>
      <button
        type="button"
        className={styles.control}
        onClick={decrease}
        disabled={quantity <= min}
      >
        −
      </button>
      <span className={styles.value}>{quantity}</span>
      <button
        type="button"
        className={styles.control}
        onClick={increase}
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
}

QuantitySelector.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default QuantitySelector;
