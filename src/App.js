import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./pages/LandPage";
import AuthContextProvider from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./layouts/MainLayout";
import NotificationPage from "./pages/NotificationPage";
import PostPage from "./pages/PostPage";
import OpenPostPage from "./pages/OpenPostPage";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/auth/*" element={<LandPage />} />
          <Route path="app" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/post/:id" element={<OpenPostPage />} />
            <Route path="/settings/*" element={<SettingPage />} />
            <Route path="/me/*" element={<ProfilePage />} />
            <Route path="/profile/:user/*" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
