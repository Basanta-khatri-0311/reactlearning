import React, { useCallback, useEffect, useRef, useState } from "react";

function UserGenerator() {
  const [userName, setUserName] = useState("");
  const [length, setLength] = useState(6);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);

  const generateUser = useCallback(() => {
    let generatedUser = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (includeNumber) str += "1234567890";
    if (includeUpperCase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      generatedUser += str.charAt(char);
    }
    setUserName(generatedUser);
  }, [length, includeNumber, includeUpperCase]);

  useEffect(() => {
    generateUser();
  }, [length, includeNumber, includeUpperCase]);

  const copiedUser = useRef(null);
  const copyUser = useCallback(() => {
    copiedUser.current?.select();
    window.navigator.clipboard.writeText(userName);
  }, [userName]);

  return (
    <div className="w-full flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-center text-3xl text-emerald-400 font-bold mb-6">
          🔧 Random User Generator
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Generated Username"
            className="p-3 bg-gray-100 text-black w-3/4 rounded-lg outline-none font-mono"
            readOnly
            value={userName}
            ref={copiedUser}
          />
          <button
            onClick={copyUser}
            className="bg-emerald-500 hover:bg-emerald-600 transition text-white px-6 py-2 rounded-full"
          >
            Copy
          </button>
        </div>

        <div className="space-y-6 mt-4">
          <div>
            <label className="text-lg text-emerald-300 font-medium block mb-2">
              Username Length: <span className="text-orange-400">{length}</span>
            </label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full accent-emerald-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="number" className="text-md text-gray-300">
              Include Numbers
            </label>
            <input
              type="checkbox"
              id="number"
              checked={includeNumber}
              onChange={() => setIncludeNumber((prev) => !prev)}
              className="w-5 h-5 accent-emerald-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="uppercase" className="text-md text-gray-300">
              Include Uppercase Letters
            </label>
            <input
              type="checkbox"
              id="uppercase"
              checked={includeUpperCase}
              onChange={() => setIncludeUpperCase((prev) => !prev)}
              className="w-5 h-5 accent-emerald-500"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={generateUser}
            className="bg-emerald-600 hover:bg-emerald-700 transition text-white w-full py-3 rounded-lg font-medium tracking-wide"
          >
            Generate Username
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserGenerator;
