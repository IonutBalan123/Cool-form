import { useState } from "react";

import styles from "./app.module.css";

import CoolForm from "./components/CoolForm/CoolForm";

function App() {
  const [showSignUp, setShowSignUp] = useState(true);
  return (
    <div className={styles.App}>
      <div >
        <h1 className={styles.SignUp}>{showSignUp ? "Sign Up" : "User File"}</h1>
      </div>
      <div className={styles.FormContainer}>
        <CoolForm
          showSignUp={() => {
            setShowSignUp(false);
          }}
        />
      </div>
    </div>
  );
}

export default App;
