import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";

import TestListPage from "./pages/TestListPage";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import TestPage from "./pages/TestPage";
import RegistrationPage from "./pages/RegistrationPage";
import ResultPage from "./pages/ResultPage";

import { Context } from "./index";

function App() {
  const { users } = useContext(Context);
  //const loggedIn = true;

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/test" element={<TestListPage />} />
          <Route path="/test/:id" element={<TestListPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/test" element={<TestPage />} />

          {users.loggedIn && <Route path="/result" element={<ResultPage />} />}
          {users.loggedIn && (
            <Route path="/profile" element={<ProfilePage />} />
          )}
          <Route path="*" element={<TestListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
