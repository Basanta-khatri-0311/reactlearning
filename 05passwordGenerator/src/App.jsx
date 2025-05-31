import React, { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const copiedText = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copiedToClipBoard = useCallback(() => {
    copiedText.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] p-4">
      <div className="bg-[#1e293b] w-full max-w-md rounded-2xl p-6 shadow-lg text-white">
        <h1 className="text-2xl font-semibold text-center mb-6 tracking-wide text-orange-400">
          🔐Random Password Generator
        </h1>

        <div className="flex items-center bg-[#0f172a] rounded-lg overflow-hidden border border-gray-700 mb-5">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 bg-transparent text-white px-4 py-3 outline-none font-mono text-sm"
            ref={copiedText}
          />
          <button
            onClick={copiedToClipBoard}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 mr-3 text-sm rounded-full transition"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-300">Password Length</label>
            <span className="text-sm text-orange-400 font-medium">
              {length}
            </span>
          </div>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full accent-orange-500"
          />

          <div className="flex items-center justify-between text-sm">
            <label htmlFor="numberInput" className="text-gray-300">
              Include Numbers
            </label>
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-orange-500 w-4 h-4"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label htmlFor="charInput" className="text-gray-300">
              Include Symbols
            </label>
            <input
              type="checkbox"
              id="charInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-orange-500 w-4 h-4"
            />
          </div>

          <button
            onClick={generatePassword}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium tracking-wide transition-all cursor-pointer"
          >
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
