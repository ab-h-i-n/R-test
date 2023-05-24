import Navbar from "./navbar";
import React from "react";
import "./App.css"
import {Route , Routes} from "react-router-dom"
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import About from "./pages/about";

function App(){
  return <>
  <Navbar/>
  <div className="container">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Pricing" element={<Pricing/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    </div></>
          
}

export default App;