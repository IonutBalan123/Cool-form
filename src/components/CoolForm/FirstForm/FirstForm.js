import { useRef, useState, useEffect } from "react";

import styles from "./firstForm.module.css";
import Button from "../../UI/Button/Button";
import Title from "../../UI/Title/Title";
import TextInput from "../../UI/Inputs/TextInput/TextInput";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
const FirstForm = (props) => {
  const nameRef = useRef();
  const lastNameRef = useRef();
  const countryRef = useRef();
  const buttonRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const handleContinue = () => {
    props.getFirstFormData({
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      country: countryRef.current.value,
    });
  };

  const nextFocus = (e, inputName) => {
    if (e.keyCode === 13) {
      switch (inputName) {
        case "name":
          lastNameRef.current.focus();
          break;
        case "lastName":
          countryRef.current.focus();
          break;
        case "country":
          buttonRef.current.focus();
          break;
        default:
          return;
      }
    }
    if (e.keyCode === 8) {
      if (inputName === "lastName" && lastNameRef.current.value === "") {
        nameRef.current.focus();
      }
      if (inputName === "country" && countryRef.current.value === "") {
        lastNameRef.current.focus();
      }
    }
  };
  const checkValidity = () => {
    if (
      nameRef.current.value === "" ||
      lastNameRef.current.value === "" ||
      countryRef.current.value === ""
    ) {
      showError("Please fill all the fields");
    } else {
      handleContinue();
    }
  };
  const showError = (error) => {
    setErrorMessage(error);
    const timer = setTimeout(() => {
      setErrorMessage(null);
      clearTimeout(timer);
    }, 2000);
  };
  return (
    <div className={styles.FirstForm}>
      <Title>First, let's get to know eachother...</Title>
      <div className={styles.InputDiv}>
        <TextInput
          handleNextFocus={(e) => nextFocus(e, "name")}
          theRef={nameRef}
          label="Tell me your name"
        />
        <TextInput
          handleNextFocus={(e) => nextFocus(e, "lastName")}
          theRef={lastNameRef}
          label="Your last name..."
        />
        <TextInput
          handleNextFocus={(e) => nextFocus(e, "country")}
          theRef={countryRef}
          label="Where are you from?"
        />
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <Button theRef={buttonRef} clicked={checkValidity}>
        Continue
      </Button>
    </div>
  );
};

export default FirstForm;
