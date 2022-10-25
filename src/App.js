import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";
function App() {
  return (
    <div className="App">
        <div className="area">
          <ul className="menu">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
