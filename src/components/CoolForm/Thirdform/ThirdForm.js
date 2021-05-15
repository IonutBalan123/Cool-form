import { useRef, useState, useEffect } from "react";

import styles from "./thirdForm.module.css";
import Title from "../../UI/Title/Title";
import Button from "../../UI/Button/Button";
import TextInput from "../../UI/Inputs/TextInput/TextInput";
import PasswordInput from "../../UI/Inputs/PasswordInput/PasswordInput";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
const ThirdForm = (props) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const buttonRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const showError = (error) => {
    setErrorMessage(error);
    const timer = setTimeout(() => {
      setErrorMessage(null);
      clearTimeout(timer);
    }, 2000);
  };
  const handleContinue = () => {
    props.getThirdFormData({
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const nextFocus = (e, inputName) => {
    if (e.keyCode === 13) {
      switch (inputName) {
        case "username":
          emailRef.current.focus();
          break;
        case "email":
          passwordRef.current.focus();
          break;
        case "password":
          buttonRef.current.focus();
          break;
        default:
          return;
      }
    }
    if (e.keyCode === 8) {
      if (inputName === "email" && emailRef.current.value === "") {
        usernameRef.current.focus();
      }
    }
  };

  const checkValidity = () => {
    if (
      usernameRef.current.value === "" ||
      emailRef.current.value === "" ||
      passwordRef.current.value === ""
    ) {
      showError("Please fill all the fields");
    } else if (!re.test(emailRef.current.value)) {
      showError("Enter a valid email");
    } else {
      handleContinue();
    }
  };

  return (
    <div className={styles.ThirdForm}>
      <Title>Setting up he finishing touches...</Title>
      <div className={styles.InputsDiv}>
        <TextInput
          label="Set an username"
          theRef={usernameRef}
          focusName="username"
          handleNextFocus={(e) => nextFocus(e, "username")}
        />
        <TextInput
          label="Enter an e-mail"
          theRef={emailRef}
          focusName="email"
          handleNextFocus={(e) => nextFocus(e, "email")}
        />
        <PasswordInput
          label="Set a password"
          theRef={passwordRef}
          focusName="password"
          handleNextFocus={(e) => nextFocus(e, "password")}
        />
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <Button theRef={buttonRef} clicked={checkValidity}>
        Continue
      </Button>
    </div>
  );
};

export default ThirdForm;
