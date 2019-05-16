import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/Login"

function App() {
  return (
    <Router>
    <div className="App">
    hello world
    </div>
    <Route to="/login/" componet={<Login />}/>
    </Router>
  );
}

export default App;
