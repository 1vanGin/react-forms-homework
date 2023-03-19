import React, { useRef, useState } from "react";
import "./SignUp.css";
import { Input } from "../components/Input/Input";
import { IconAt } from "@tabler/icons-react";

export function SignUp(props) {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    sex: "",
    password: "",
    rep_password: "",
  });
  const [hasErrors, setHasErrors] = useState(false);
  const formRef = useRef(null);

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasErrors(false);

    for(const input in inputs) {
      if(inputs[input] === ''){
        alert('Заполните поля!')
        setHasErrors(true);
        return;
      }
    }

    if (inputs.password !== inputs.rep_password) {
      alert("Пароли не совпадают!");
      setHasErrors(true);
      return;
    }

    if (!hasErrors) {
      alert("Вы зарегистрированы!");
      formRef.current.reset();
      props.onRegister(true)
    }
  };

  const handleReset = () => {
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
            <Input type="text" name="name" placeholder="Имя" />
            <Input type="text" name="username" placeholder="Ник" />
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              icon={<IconAt size="1.25rem" />}
            />
            <div className="sex-wrapper">
              <span>Выберите пол: </span>
              <Input type="radio" id="man" name="sex" value="Муж" radioLabel="Муж" />
              <Input
                type="radio"
                id="woman"
                name="sex"
                value="Жен"
                radioLabel="Жен"
              />
            </div>

            <Input
              type="password"
              name="password"
              placeholder="Введите пароль"
            />
            <Input
              type="password"
              name="rep_password"
              placeholder="Повторите пароль"
            />
            <button className="button" type="submit">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
