import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import "./App.css";

import Home from './components/screens/Home';
import Signin from './components/screens/Signin';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';


function App() {
  return (
    // Browser Router also a component
    <BrowserRouter>
      <Navbar />
      <Route exact path="/"><Home /></Route>
      <Route path="/signin"><Signin /></Route>
      <Route path="/signup"><Signup /></Route>
      <Route path="/profile"><Profile /></Route>
      <Route path="/create"><CreatePost /></Route>
    </BrowserRouter>

  );
}

export default App;
