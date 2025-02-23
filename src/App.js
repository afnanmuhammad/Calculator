import Styles from "./App.Module.css";
import Display from './Components/Display';
import ButtonContainer from "./Components/ButtoContainer.jsx";
import { useState } from "react";
// import { Button } from "bootstrap";

function App() {
  // =======================Calculator Codeing ================================= 
  const [currentValue, setCurrentValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCurrentValue(" ");
    } else if (buttonText === "=") {
      const result = eval(currentValue);
      setCurrentValue(result);
    } else {
      const newDispaly = currentValue + buttonText;
      setCurrentValue(newDispaly);

    }
  };
  return (
    <center>
      <div className="calculator">
        <Display displayValue={currentValue} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </center>

  );
}

export default App;
