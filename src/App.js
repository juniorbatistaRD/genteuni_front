import React from "react";
import "./App.css";
import { Router } from "@reach/router";
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
        <LandPage path="/" />
        <LandPage path="/auth/*" />
        <MainLayout path="app">
          <HomePage path="/" />
          <SettingPage path="/settings/*" />
          <ProfilePage path="/profile/" />
          <ProfilePage path="/profile/:user" />
        </MainLayout>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
