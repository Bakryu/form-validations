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
            className="input"
            onBlur={(e) => email.onBlur(e)}
            onChange={(e) => email.onChange(e)}
            value={email.value}
            name="email"
            type="text"
            placeholder="enter your email...."
          />
          <span
            className={`${
              email.isDirty || email.errorValue
            } input__error-massage input_red`}
          >
            {email.isDirty && !email.errorValue && "is empty"}
          </span>
        </div>
        <input
          className="input"
          onBlur={(e) => password.onBlur(e)}
          onChange={(e) => password.onChange(e)}
          value={password.value}
          name="password"
          type="password"
          placeholder="enter your password...."
        />
        <button className="button_middle button_global-style" type="submit">
          Registration
        </button>
      </form>
    </div>
  );
}

export default App;
