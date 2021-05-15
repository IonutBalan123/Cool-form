import { useRef, useState } from "react";

import styles from "./passwordInput.module.css";

import openedEye from "../../../../assets/images/openedEye.png";
import closedEye from "../../../../assets/images/closedEye.png";
const PasswordInput = (props) => {
  const [eyeIsVisible, setEyeIsVisible] = useState(false);
  const passwordRef = useRef();
  return (
    <div className={styles.PasswordDiv}>
      <label>{props.label}</label>
      <div className={styles.PasswordInnerDiv}>
        <input
          type={eyeIsVisible ? "text" : "password"}
          ref={props.theRef}
          onKeyDown={(e) => props.handleNextFocus(e, props.focusName)}
        />
        <button
          onMouseDown={() => {
            setEyeIsVisible(true);
          }}
          onTouchStart={() => {
            setEyeIsVisible(true);
          }}
          onMouseUp={() => {
            setEyeIsVisible(false);
          }}
          onTouchEnd={() => {
            setEyeIsVisible(false);
          }}
          className={styles.EyeButton}
        >
          <img src={eyeIsVisible ? openedEye : closedEye} alt="opened eye" />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
