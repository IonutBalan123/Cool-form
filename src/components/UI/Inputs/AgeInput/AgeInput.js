import styles from './ageInput.module.css';

const AgeInput = props => {
    return (
      <div className={styles.AgeInput}>
        <label>Age</label>
        <input
          type="number"
          min="15"
          max="100"
          ref={props.theRef}
          onKeyDown={props.handleNextFocus}
        />
      </div>
    );
}
 
export default AgeInput;
