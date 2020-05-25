import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import "./App.css";

import Home from './components/screens/Home';
import Signin from './components/screens/Login';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/"><Home /></Route>
      <Route path="/signin"><Signin /></Route>
      <Route path="/signup"><Signup /></Route>
      <Route path="/profile"><Profile /></Route>
    </BrowserRouter>

  );
}

export default App;
