import React, { useState } from "react";
import "./AccessPortal.css";
import MyInput from "./LoginForm";

const AccessPortal = () => {
  const [isRegistered, setIsRegistered] = useState("");

  const handleRegisterClick = () => {
    if (MyInput === "") {
      setIsRegistered(alert("Вы успешно зарегистрировались!"));
    } else {
      setIsRegistered(alert("Пожалуйста, заполните все поля."));
    }
  };

  return (
    <form className="login-form">
      <h1>Log In </h1>
      <MyInput
        error="Поле не должно быть пустым!"
        labelName="First name"
      />
      <MyInput
        error="Поле не должно быть пустым!"
        labelName="Last name"
      />
      <MyInput
        error="Поле не должно быть пустым!"
        labelName="Password"
        type="password"
      />
      <MyInput
        error="Поле не должно быть пустым!"
        labelName="Email"
        type="email"
      />
      <MyInput
        error="Поле не должно быть пустым!"
        labelName="Adress"
      />
      <MyInput
        error="Поле не должно быть пустым!"
        labelName="City"
      />
      <MyInput
        error="Поле не должно быть пустым!"
        labelName="Age"
        type="number"
      />

      <button onClick={handleRegisterClick} value={isRegistered}>
        REGISTER
      </button>
    </form>
  );
};

export default AccessPortal;
