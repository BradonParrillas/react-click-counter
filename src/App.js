import "./App.css";
import logo from "./images/logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const countClick = () => {
    console.log("Click");
  };

  const resetButton = () => {
    console.log("Reset");
  };

  return (
    <div className="App">
      <div className="container-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="cointainer-main">
        <Counter clickNumbers={"5"} />
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
