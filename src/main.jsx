import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Footer from "./components/footer.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar></Navbar>
      <Home></Home>
      
      

      <Projects></Projects>
      <About></About>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Journey/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>  */}
      <Footer></Footer>
    </Router>
  </StrictMode>
);
