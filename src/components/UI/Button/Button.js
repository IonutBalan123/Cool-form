import styles from "./button.module.css";

const Button = ({ children, theRef, clicked }) => {
  return (
    <div className={styles.ButtonDiv}>
      <button className={styles.Button} ref={theRef} onClick={clicked}>
        {children}
      </button>
    </div>
  );
};

export default Button;
