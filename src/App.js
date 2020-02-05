import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import LandPage from './pages/LandPage';
import AuthContextProvider from './contexts/AuthContext';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <LandPage path="/"/>
          <LandPage path="/auth/*"/>
          <HomePage path="/home/*"/>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
