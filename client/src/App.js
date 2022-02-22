import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// import components for main site
import Header from "./components/Header";
import Footer from "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import CV from "./components/CV"
import Contact from "./components/Contact"
import Audio from "./components/Audio"
import Home from "./components/Home"

function App() {

  return (
    <BrowserRouter>
      <div className="App" id="page">
        {/* Components & React Router setup */}
        <Header />
        <div id="display">
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
