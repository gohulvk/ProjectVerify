import React from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Registation from "./components/Register/Registation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import LegalDis from "./components/LegalDis/LegalDis";
import Terms from "./components/Terms&Condition/Terms_condition";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";


function App() {
  
  return (
    <div>
      
      <BrowserRouter>
       <Routes>
        {/* <Route path="/" element={<PrivateRouter element={<Home/>}/>}/>  */}
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registation/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/legaldis" element={<LegalDis/>}/>
        <Route path="/terms" element={<Terms/>}/>
       </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
