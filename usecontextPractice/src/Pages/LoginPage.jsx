import React, { useState } from "react";
import { useLogIn } from "../LoginContext";

const LoginPage = () => {
  const { currentUser, login, logout } = useLogIn();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(userName, password);
    if (success) {
      setUserName("");
      setPassword("");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[400px] bg-white shadow-xl border-2 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            id="username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter your username"
            
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
          <button className="border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-100 transition">
            Sign Up
          </button>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-700 font-medium">
          {currentUser ? `Welcome, ${currentUser.userName}` : "Not Logged in"}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
