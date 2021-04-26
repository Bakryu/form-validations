const validation = (value, validations, setErrorValue) => {
  setErrorValue(null);
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

export default validation;
