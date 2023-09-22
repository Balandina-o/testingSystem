import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestListPage from "./pages/TestListPage";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import TestPage from "./pages/TestPage";
import RegistrationPage from "./pages/RegistrationPage";
// import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}

        <Routes>
          <Route path="/main" element={<TestListPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/survey" element={<TestPage />} />
          <Route path="*" element={<TestListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
