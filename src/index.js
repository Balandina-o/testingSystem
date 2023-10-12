import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import UsersStore from "./store/usersStore";
import TestsStore from "./store/testsStore";
import ResultsStore from "./store/resultsStore";
import AllUsersStore from "./store/allUsersStore";

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      users: new UsersStore(),
      tests: new TestsStore(),
      results: new ResultsStore(),
      allUsers: new AllUsersStore(),
    }}
  >
    <App />
  </Context.Provider>
);
