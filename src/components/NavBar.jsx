import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

const IconButton = ({ Icon, onClick }) => (
  <li className="flex gap-1 items-center">
    <motion.button
      onClick={onClick}
      className="flex items-center"
      whileHover={{ scale: 1.2, color: "#FF0000" }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={23} className="text-gray-800" />
    </motion.button>
  </li>
);
const NavBar = ({ isParentFocused }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isParentFocused) {
      setIsOpen(false);
    }
  }, [isParentFocused]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (label) => {
    console.log(`Navigating to ${label}`);
  };

  return (
    <div
      className="sticky top-5  z-50"
    >
      <div className="absolute w-[80%] sm:w-[50%] left-1/2 -translate-x-1/2 flex items-center justify-between h-10 lg:h-12  bg-white/50  rounded-xl shadow-md">
        <div className="flex items-center justify-center ml-2">
          <motion.button
            onClick={() => handleClick("logo")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src="/static/logo/logo.png"
              alt="Logo"
              className="h-20 -ml-4 lg:h-24 object-center drop-shadow-2xl"
            />
          </motion.button>
        </div>
        <ul className="hidden sm:flex font-poppins justify-center gap-12 md:gap-16 items-center list-none px-12">
          <IconButton Icon={FaHome} onClick={() => handleClick("Home")} />
          <IconButton Icon={FaGithub} onClick={() => handleClick("Github")} />
          <IconButton
            Icon={RiContactsFill}
            onClick={() => handleClick("Contact")}
          />
        </ul>
        <div className="sm:hidden px-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="absolute top-10 right-5 sm:hidden font-poppins text-black mx-4 p-6 mt-2 bg-white/50 rounded-3xl border-b border-gray-300 shadow-md"
        >
          <ul className="flex flex-col gap-2 items-center">
            <li>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleClick("Home")}
              >
                Home
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleClick("Github")}
              >
                Github
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleClick("Contect")}
              >
                Contect
              </motion.button>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};  

export default NavBar;
