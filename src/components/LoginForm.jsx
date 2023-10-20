import React, { useState } from "react";

const MyInput = (props) => {
  const { labelName, error, type } = props;

  const [inputValue, setInputValue] = useState("");
  const [error1, setError1] = useState("");

  const checkFirstName = (e) => {
    setInputValue(e.target.value);
    if (labelName === "Password") {
      if (inputValue.length >= 6) {
        setError1("");
      } else {
        setError1("Пароль должен состоять минимум из 6 символов!");
      }
    }

    if (labelName === "Age") {
      if (e.target.value > 18) {
        setError1("");
      } else {
        setError1("Возраст должен быть старше 18 лет!");
      }
    }
    if (labelName === "Email") {
      if (e.target.value.includes("@gmail.com")) {
        setError1("");
      } else {
        setError1("Некорректный электронный адрес!");
      }
    }
  };

  // const valid = () => {
  //   if (inputValue === "") {
  //     setError1(error);
  //   } else {
  //     setError1("");
  //   }
  // };       ---------------------> это для onBlur={} 

  return (
    <div>
      <label htmlFor="">{labelName}</label>
      <input
        type={type ? type : "text"}
        onChange={checkFirstName}
        value={inputValue}
        // onBlur={valid}
      />
      {inputValue === "" ? <p>{error}</p> : null}
      <p>{error1}</p>
    </div>
  );
};

export default MyInput;
