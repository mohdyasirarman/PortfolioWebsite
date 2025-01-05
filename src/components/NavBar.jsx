import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaBrain, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ isParentFocused }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", icon: FaHome, label: "Home" },
    { path: "/about", icon: FaUser, label: "About" },
    { path: "/projects", icon: FaCode, label: "Projects" },
    { path: "/skills", icon: FaBrain, label: "Skills" },
  //  { path: "/contact", icon: FaEnvelope, label: "Contact" }, incomplete
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const variants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full  z-50 bg-[#151515]/10 backdrop-blur-2xl border-b border-[#dc143c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
         
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#dc143c] to-[#ff4d6d] text-transparent bg-clip-text">
              Y@$|R
            </span>
          </Link>

        
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "text-[#dc143c] bg-[#dc143c]/10"
                    : "text-gray-300 hover:text-[#dc143c] hover:bg-[#dc143c]/10"
                }`}
              >
                <item.icon className="text-lg" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

         
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#dc143c] p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

    
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="fixed inset-y-0 left-0 w-64 bg-[#151515] shadow-lg md:hidden"
          >
            <div className="flex flex-col h-full py-6 px-4">
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#dc143c] to-[#ff4d6d] text-transparent bg-clip-text">
                  YA
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-[#dc143c] p-2"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "text-[#dc143c] bg-[#dc143c]/10"
                        : "text-gray-300 hover:text-[#dc143c] hover:bg-[#dc143c]/10"
                    }`}
                  >
                    <item.icon className="text-lg" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
