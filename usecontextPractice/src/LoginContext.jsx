import { useState, createContext, useContext } from "react";

//we need to first create our context

const LoginContext = createContext();

//created Context gives provider and consumer

const users = [
  {
    userName: "basanta107",
    password: "basanta107",
  },
  {
    userName: "hello100",
    password: "hello100",
  },
  {
    userName: "igotin0001",
    password: "igotinooo1",
  },
];

//provider
const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // Fake login function
  
  const login = (username, password) => {
    const foundUser = users.find(
      (user) => user.userName === username && user.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <LoginContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

//consumer

const useLogIn = () => useContext(LoginContext);

export { LoginProvider, useLogIn };
