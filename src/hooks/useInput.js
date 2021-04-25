import { useState } from "react";
// import validation from "./validation";
const validation = (value, validations, setErrorValue) => {
  for (const validation in validations) {
    switch (validation) {
      case "isEmpty":
        !value && setErrorValue(`is empty`);
        break;

      case "minLengthError":
        value &&
          value.length < validations[validation] &&
          setErrorValue(`min length ${validations[validation]}`);
        console.log("hi");
        break;

      case "isEmail":
        const re = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
        !re.test(String(value).toLowerCase()) &&
          setErrorValue(`enter correct email`);
        break;
      default:
        break;
    }
  }
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [errorValue, setErrorValue] = useState(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = (e) => {
    validation(value, validations, setErrorValue);
  };
  return { value, onChange, onBlur, errorValue };
};
export default useInput;
