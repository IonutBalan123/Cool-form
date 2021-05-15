import styles from "./textInput.module.css";

const TextInput = (props) => {
  return (
    <div className={styles.TextInput}>
      <label>{props.label}</label>
      <input type="text" onKeyDown={props.handleNextFocus} ref={props.theRef} />
    </div>
  );
};

export default TextInput;
