import "./App.css";
import logo from "./images/logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [clickNumbers, setClickNumbers] = useState(0);

  const countClick = () => {
    setClickNumbers(clickNumbers + 1);
  };

  const resetButton = () => {
    setClickNumbers(0);
  };

  return (
    <div className="App">
      <div className="container-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="cointainer-main">
        <Counter clickNumbers={clickNumbers} />
        <Button
          text="Click"
          buttonType="button-click"
          buttonFuction={countClick}
        />
        <Button
          text="Reset"
          buttonType="button-reset"
          buttonFuction={resetButton}
        />
      </div>
    </div>
  );
}

export default App;
