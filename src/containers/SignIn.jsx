import React, { useRef, useState } from "react";
import { Input } from "../components/Input/Input";

export function SignIn(props) {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const formRef = useRef(null);

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputs.username === ''){
      alert('Введите никнейм')
      return
    }
    if(inputs.password === ''){
      alert('Введите пароль')
      return;
    }

    props.onSubmit(inputs);
    formRef.current.reset();
  };

  const handleReset = (event) => {
    event.preventDefault();
    setInputs({});
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="form">
          <img
            alt="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHV0XPRocHB0ve1CiWhcl9BcbLua-YljnoVA&usqp=CAU"
          />
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            onChange={handleChange}
            onReset={handleReset}
          >
            <Input type="text" name="username" placeholder="Ник" />

            <Input
              type="password"
              name="password"
              placeholder="Введите пароль"
            />
            <div className="button-wrapper">
              <button className="button" type="submit">
                Войти
              </button>
              <button className="button" onClick={() => props.onSubmit({})}>
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
