import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
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
      <Button variant="secondary" onClick={decrease} disabled={quantity <= min}>
        −
      </Button>
      <span className={styles.value}>{quantity}</span>
      <Button variant="secondary" onClick={increase} disabled={quantity >= max}>
        +
      </Button>
    </div>
  );
}

QuantitySelector.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default QuantitySelector;
