import styles from "./selectInput.module.css";

const SelectInput = ({ options, label, theRef, handleNextFocus }) => {
  return (
    <div className={styles.SelectInput}>
      <p>{label}</p>
      <select ref={theRef} onKeyDown={handleNextFocus}>
        {options.map(({ optionValue, optionShow }) => {
          return (
            <option value={optionValue} key={optionValue}>
              {optionShow}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
