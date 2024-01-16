import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop
from './components/ScrollToTop';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Preloader from "../src/components/Pre";
import Home from './components/Home/Home';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load}/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
