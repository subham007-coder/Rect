import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button
          onClick={() => setColor("red")}
            className="px-3 outline-none rounded-full text-white py-3"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={() => setColor("green")}
            className="px-3 outline-none rounded-full text-white py-3"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={() => setColor("blue")}
            className="px-3 outline-none rounded-full text-white py-3"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={() => setColor("purple")}
            className="px-3 outline-none rounded-full text-white py-3"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
          onClick={() => setColor("olive")}
            className="px-3 outline-none rounded-full text-white py-3"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
          onClick={() => setColor("pink")}
            className="px-3 outline-none rounded-full text-black py-3"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
