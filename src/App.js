import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./pages/LandPage";
import AuthContextProvider from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/auth/*" element={<LandPage />} />

          <Route path="app" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings/*" element={<SettingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/:user" element={<ProfilePage />} />
          </Route>
        </Routes>
        {/* <LandPage path="/" />
        <LandPage path="/auth/*" />
        <MainLayout path="app">
          <HomePage path="/" />
          <SettingPage path="/settings/*" />
          <ProfilePage path="/profile/" />
          <ProfilePage path="/profile/:user" />
        </MainLayout> */}
      </Router>
    </AuthContextProvider>
  );
}

export default App;
