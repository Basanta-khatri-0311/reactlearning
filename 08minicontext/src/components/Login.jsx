import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const { setUser } = useContext(UserContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    setUser({userName,pass})
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="user-name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}

export default Login;
