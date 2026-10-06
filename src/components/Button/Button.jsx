import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
