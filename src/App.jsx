import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
// import Skill from "./pages/Skillset";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

// import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./pages/Service";
import Homeloan from "./pages/subpages/Homeloan";
import Vastu from "./pages/subpages/Vastu";
import Stocks from "./pages/subpages/Stocks";
import Emicalculator from "./pages/Emicalculator";
import CompareEmi from "./pages/CompareEmi";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          
          <Route path="/about" element={<About/>} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/homeloan" element={<Homeloan />} />
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/compareemi" element={<CompareEmi />} />
          <Route path="/emicalculator" element={<Emicalculator />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
