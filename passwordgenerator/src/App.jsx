import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberVal, setNumber] = useState(false);
  const [carecterVal, setCarecter] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook
  const passwordRef = useRef(null);

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberVal) str += "0123456789";
    if (carecterVal) str += "$%^&_=?:;,./|~<(){}[]¿ñçßæœåøäöüÿëïôîû";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, numberVal, carecterVal, setPassword]);

  let copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

    document.querySelector(".clickEfect").classList =
      "clickEfect outline-none bg-slate-950 py-2 px-3";

    document.querySelector("i").classList = "fa-solid fa-copy";
  }, [password]);

  useEffect(() => {
    passwordGen();
  }, [length, numberVal, carecterVal, passwordGen]);

  return (
    <>
      <div className="w-full max-w-md  mx-auto shadow-md px-4 py-3 my-8 bg-gray-600 rounded-lg text-green-600">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPass}
            className="clickEfect outline-none bg-slate-800 py-2 px-3"
          >
            <i class="fa-regular fa-copy"></i>
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberVal}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-center">
              Number
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={carecterVal}
              id="carInput"
              onChange={() => {
                setCarecter((prev) => !prev);
              }}
            />
            <label htmlFor="carInput" className="text-center">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
