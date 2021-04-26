import { useState } from "react";
import validation from "./validation";

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [errorValue, setErrorValue] = useState(null);
  const [isPure, setPure] = useState(true);

  const onChange = (e) => {
    setValue(e.target.value);
    setPure(false);
  };
  const onBlur = (e) => {
    validation(value, validations, setErrorValue);
  };
  return { value, onChange, onBlur, errorValue, isPure };
};
export default useInput;
