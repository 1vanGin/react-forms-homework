import "./App.css";
import { SignUp } from "./containers/SignUp";
import { SignIn } from "./containers/SignIn";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  const onSubmitHandler = (data = {}) => {
    if (!Object.keys(data).length) {
      setIsAuth(false);
      return
    }
    alert('Вы вошли');
  };

  return (
    <div className="App">
      <header className="App-header">
        {isAuth && <SignIn onSubmit={onSubmitHandler} />}
        {!isAuth && <SignUp onRegister={setIsAuth}/>}
      </header>
    </div>
  );
}

export default App;
