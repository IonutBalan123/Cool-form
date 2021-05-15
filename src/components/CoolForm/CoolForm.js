import { useState } from "react";
import styles from "./coolForm.module.css";
import FirstForm from "./FirstForm/FirstForm";
import SecondForm from "./SecondForm/SecondForm";
import ThirdForm from "./Thirdform/ThirdForm";
import Final from "./Final/Final";
import LoadingIndicator from "../UI/LoadingIndicator/LoadingIndicator";
import { CSSTransition, SwitchTransition } from "react-transition-group";
const CoolForm = (props) => {
  const [allData, setAllData] = useState({});
  const [switchDiv, setSwitchDiv] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLastDiv, setShowLastDiv] = useState(false);

  const handleFistFormData = (data) => {
    setAllData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
    setSwitchDiv(true);
    setCurrentForm(forms[1]);
  };
  const handleSecondFormData = (data) => {
    setSwitchDiv(false);
    setCurrentForm(forms[2]);
    setAllData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  };

  const handleThirdFormData = (data) => {
    setLoading(true);
    props.showSignUp();
    setAllData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
    setTimeout(() => {
      setLoading(false);
      setShowLastDiv(true);
      setCurrentForm(<></>);
    }, 2000);
  };

  const forms = [
    <FirstForm getFirstFormData={handleFistFormData} />,
    <SecondForm getSecondFormData={handleSecondFormData} />,
    <ThirdForm getThirdFormData={handleThirdFormData} />,
  ];
  const [currentForm, setCurrentForm] = useState(forms[0]);
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={switchDiv}
            timeout={650}
            classNames={{
              enter: styles["fade-enter"],
              enterActive: styles["fade-enter-active"],
              exitActive: styles["fade-exit-active"],
              exit: styles["fade-exit"],
            }}
          >
            {currentForm}
          </CSSTransition>
        </SwitchTransition>
      )}
      {showLastDiv ? <Final data={{ ...allData }} /> : null}
      {/* <Final data={{ ...allData }}/> */}
    </>
  );
};

export default CoolForm;
