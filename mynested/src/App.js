import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUP from "./signup";
import Home from "./home";
import Profile from "./profile";
import About from "./about";
function App() {
    
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUP/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}
  
export default App;