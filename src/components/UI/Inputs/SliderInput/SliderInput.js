import styles from "./sliderInput.module.css";

const SliderInput = (props) => {
  return (
    <div className={styles.SingleForm}>
      <div className={styles.ContainerDivName}>
        <p className={styles.SizeP}>{props.label}</p>

        <div>
          <input
            type="number"
            min={props.min}
            max={props.max}
            value={props.theValue}
            className={styles.DataInput}
            ref={props.inputRef}
            onChange={props.handleInputOnChange}
            onKeyDown={props.handleOnKeyDown}
          />
          <label>{props.labelValue}</label>
        </div>
      </div>
      <div>
        <input
          type="range"
          className={styles.SliderInput}
          min={props.min}
          max={props.max}
          ref={props.theRef}
          value={props.theValue}
          onChange={props.handleOnChange}
        ></input>
      </div>
    </div>
  );
};

export default SliderInput;
