import React from "react";
import useInput from "../../hooks/useInput";
import "./app.css";

function App() {
  const email = useInput("", {
    isEmail: true,
    minLengthError: 6,
    isEmpty: false,
  });
  const password = useInput("", { isEmpty: true, minLengthError: 8 });
  return (
    <div className="app">
      <form className="input__grope">
        <h1>Регистрация</h1>
        <div className="input-wrapper">
          <input
            className={`input ${email.errorValue && `input_red`}`}
            onBlur={(e) => email.onBlur(e)}
            onChange={(e) => email.onChange(e)}
            value={email.value}
            name="email"
            type="text"
            placeholder="enter your email...."
          />
          <span
            className={email.errorValue && "input__error-massage input_red"}
          >
            {email.errorValue}
          </span>
        </div>
        <div className="input-wrapper">
          <input
            className={`input ${password.errorValue && `input_red`}`}
            onBlur={(e) => password.onBlur(e)}
            onChange={(e) => password.onChange(e)}
            value={password.value}
            name="password"
            type="password"
            placeholder="enter your password...."
          />
          <span
            className={password.errorValue && "input__error-massage input_red"}
          >
            {password.errorValue}
          </span>
        </div>
        <button className="button_middle button_global-style" type="submit">
          Registration
        </button>
      </form>
    </div>
  );
}

export default App;
