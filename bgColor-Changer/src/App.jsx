import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [counter, setConter] = useState(10);

  const addVal = () => {
    if (counter === 20) {
      setConter(counter);
    } else {
      setConter(counter + 1);
    }
  };

  const removeVal = () => {
    if (counter === 0) {
      setConter(counter);
    } else{
      setConter(counter - 1);
    }
  };

  return (
    <>
      <button onClick={addVal}>Add Number</button>
      <br />
      <h1>{counter}</h1>
      <br />
      <button onClick={removeVal}>Remove Number</button>

    <Card brandName="Redmi" mi="Mi" xomi="Xiaomi"/>

    </>
  );
}

export default App;
