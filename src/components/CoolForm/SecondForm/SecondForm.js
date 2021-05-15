import { useState, useRef, useEffect } from "react";

import styles from "./secondForm.module.css";
import Title from '../../UI/Title/Title'
import Button from "../../UI/Button/Button";
import SliderInput from "../../UI/Inputs/SliderInput/SliderInput";
import AgeInput from "../../UI/Inputs/AgeInput/AgeInput";
import SelectInput from "../../UI/Inputs/SelectInput/SelectInput";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";


const SecondForm = (props) => {
  const [weight, setWeight] = useState(45);
  const [height, setHeight] = useState(170);
  const ageRef = useRef();
  const weightRef = useRef();
  const heightRef = useRef();
  const inputWeightRef = useRef();
  const inputHeightRef = useRef();
  const kaloriesRef = useRef();
  const exerciseRef = useRef();
  const buttonRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    ageRef.current.focus();
  }, []);

  const handleContinue = () => {
    if (ageRef.current.value === "") {
      setErrorHandler("Please set an age");
    } else if (ageRef.current.value < 15) {
      setErrorHandler("The minimum age is 15");
    } else if (ageRef.current.value > 100) {
      setErrorHandler("The maximum age is 100");
    } else if (weightRef.current.value >= 150) {
      setErrorHandler("Maximum weight is 150kg");
    } else if (weightRef.current.value <= 40) {
      setErrorHandler("Minimum weight is 40kg");
    } else if (heightRef.current.value >= 220) {
      setErrorHandler("Maximum height is 2.2m");
    } else if (heightRef.current.value <= 130) {
      setErrorHandler("Minimum height is 1.3m");
    } else {
      props.getSecondFormData({
        age: ageRef.current.value,
        weight: weightRef.current.value,
        height: heightRef.current.value,
        kalories: kaloriesRef.current.value,
        exercise: exerciseRef.current.value,
      });
    }
  };
  const nextFocus = (e, inputName) => {
    if (e.keyCode === 13) {
      switch (inputName) {
        case "age":
          inputWeightRef.current.focus();
          break;
        case "weight":
          inputHeightRef.current.focus();
          break;
        case "height":
          kaloriesRef.current.focus();
          break;
        case "kalories":
          exerciseRef.current.focus();
          break;
        case "exercise":
          buttonRef.current.focus();
          break;
        default:
          return;
      }
    }
  };
  const setErrorHandler = (message) => {
    setErrorMessage(message);
    const timer = setTimeout(() => {
      setErrorMessage(null);
      clearTimeout(timer);
    }, 2000);
  };
  return (
    <div className={styles.SecondForm}>
      <Title>Now tell me about your current physic...</Title>
      <div className={styles.ContainerDivOutter}>
        <AgeInput
          theRef={ageRef}
          handleNextFocus={(e) => nextFocus(e, "age")}
        />
        <SliderInput
          label="Weight"
          labelValue="Kg"
          theValue={weight}
          min="40"
          max="150"
          theRef={weightRef}
          inputRef={inputWeightRef}
          handleInputOnChange={(e) => setWeight(e.target.value)}
          handleOnKeyDown={(e) => nextFocus(e, "weight")}
          handleOnChange={() => setWeight(weightRef.current.value)}
        />
        <SliderInput
          label="Height"
          labelValue="cm"
          theValue={height}
          min="130"
          max="220"
          theRef={heightRef}
          inputRef={inputHeightRef}
          handleInputOnChange={(e) => setHeight(e.target.value)}
          handleOnKeyDown={(e) => nextFocus(e, "height")}
          handleOnChange={() => setHeight(heightRef.current.value)}
        />
        <SelectInput
          options={[
            {
              optionValue: "500-100",
              optionShow: "500-1000 Kcal",
            },
            {
              optionValue: "1000-1500",
              optionShow: "1000-1500 Kcal",
            },
            {
              optionValue: "1500-2000",
              optionShow: "1500-2000 Kcal",
            },
            {
              optionValue: "2000-2500",
              optionShow: "2000-2500 Kcal",
            },
            {
              optionValue: "2500-3000",
              optionShow: "2500-3000 Kcal",
            },
            {
              optionValue: "+3000",
              optionShow: "More than 3000 Kcal",
            },
          ]}
          theRef={kaloriesRef}
          label="How many calories do you eat per day?"
          handleNextFocus={(e) => nextFocus(e, "kalories")}
        />
        <SelectInput
          options={[
            {
              optionValue: "0-30",
              optionShow: "0-30 minutes",
            },
            {
              optionValue: "30-60",
              optionShow: "30-60 minutes",
            },
            {
              optionValue: "60-90",
              optionShow: "60-90 minutes",
            },
            {
              optionValue: "90-120",
              optionShow: "90-120 minutes",
            },
          ]}
          theRef={exerciseRef}
          label="How many much time do you exercise per day?"
          handleNextFocus={(e) => nextFocus(e, "exercise")}
        />
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <Button theRef={buttonRef} clicked={handleContinue}>
        Continue
      </Button>
    </div>
  );
};

export default SecondForm;
