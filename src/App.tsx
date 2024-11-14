import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./pages/Home"; // Ensure the path to Home component is correct
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import DroneDetail from "./pages/Dronedetail";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/product/test" element={<DroneDetail/>}/>
        <Route path="/management" element={<Admin />} /> 
      </Routes>
    </Router>
  );
}

export default App;
