import React from "react";

import styles from "./loadingIndicator.module.css";

const LoadingIndicator = () => (
  <div className={styles.LdsRing}>
    <span className={styles.TitleSpan}>
      Creating your profile, just a second...
    </span>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadingIndicator;
