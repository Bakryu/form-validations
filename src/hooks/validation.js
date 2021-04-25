const validation = (value, validations, setErrorValue) => {
  for (const validation in validations) {
    switch (validation) {
      case "minLength":
        value.length < validations[validation] &&
          setErrorValue(`min length ${validations[validation]}`);
        break;

      case "isEmail":
        const re = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
        re.test(String(value).toLowerCase()) &&
          setErrorValue(`enter correct email`);
        break;
      case "isEmpty":
        value && setErrorValue(`is empty`);
        console.log("hi");
        break;
      default:
        setErrorValue(null);
        break;
    }
  }
};

export default validation;
