// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import LoginPage from './components/loginForm';
import {Routes,Route} from "react-router-dom"
import Body from "./components/Body"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
     <Route path="/home" element={<Body />}></Route> 
     <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
