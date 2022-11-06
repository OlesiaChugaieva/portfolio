import React from "react"
import { Routes, Route } from "react-router-dom"
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"


function App() {
return (
  <div className="App">
      <Navbar/>
    <div className="main">
      {/* Define all the routes */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
      <Footer />
      
    </div>
  </div>
)
}
  
export default App;
