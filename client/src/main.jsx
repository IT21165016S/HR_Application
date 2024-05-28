import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React, { createContext, useState } from "react";
import "./index.css"

export const Context = createContext({ isAuthorized: false , user: null});

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
