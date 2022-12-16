import "./App.css";
import logo from "./images/logo.png";
import Button from "./components/Button";

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
        <Button text="Click" buttonType="click" buttonFuction={countClick} />
        <Button text="Reset" buttonType="reset" buttonFuction={resetButton} />
      </div>
    </div>
  );
}

export default App;
