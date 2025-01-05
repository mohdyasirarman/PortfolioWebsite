import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./index.css";

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Herosection />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isParentFocused, setParentFocused] = useState(false);
  const handleFocus = () => setParentFocused(true);
  const handleBlur = () => setParentFocused(false);

  return (
    <BrowserRouter>
      <div
        className="bg-[#151515] min-h-screen"
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
      >
        <NavBar isParentFocused={isParentFocused} />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
