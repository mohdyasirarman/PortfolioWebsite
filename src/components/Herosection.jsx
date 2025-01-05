import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { HiDownload } from "react-icons/hi";
import CanvasDesign from "./CanvasDesign";


const Herosection = () => {
  const [gapOfStroke, setGapOfStroke] = useState(50);

  useEffect(() => {
    const handleResize = () => {
      const currentScreenW = window.innerWidth;
      if (currentScreenW < 500) {
        setGapOfStroke(130);
      } else {
        setGapOfStroke(110);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
   
  const notify = () => toast("Downloading CV is not available right now.");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#151515] font-poppins overflow-hidden z-10">
      <CanvasDesign gapOfStroke={gapOfStroke} color="#dc143c" />
      
      <motion.div 
        className="flex flex-col justify-center items-center absolute inset-0 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="text-[#dc143c] text-lg sm:text-xl font-medium mb-2"
        >
          {`Hello, I'm`}
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-[#dc143c] to-[#ff4d6d] text-transparent bg-clip-text">
          {`Yasir Arman`}
          </span>
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center"
        >
          <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            {`Software Engineer`}
          </span>
        </motion.h2>

        <motion.div 
          variants={itemVariants}
          className="max-w-2xl text-center mb-8"
        >
          <p className="text-gray-300 text-base sm:text-lg mb-4">
            {`B.Tech Student & Electronics in Diploma from Jamia Millia Islamia Central University`}
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {`Passionate about creating innovative solutions through code. Combining my electronics background 
            with software engineering to build impactful applications.`}
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <motion.button
            onClick={notify}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#dc143c] text-white rounded-lg flex items-center gap-2 hover:bg-[#b01030] transition-colors"
          >
            <HiDownload className="text-xl" />
            Download CV
           
          </motion.button>
          
          <motion.div className="flex gap-4">
            <motion.a
              href="https://github.com/mohdyasirarman"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800/50 text-white rounded-lg hover:bg-[#dc143c]/20 hover:text-[#dc143c] transition-colors"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/mohdyasirarman"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800/50 text-white rounded-lg hover:bg-[#dc143c]/20 hover:text-[#dc143c] transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      <ToastContainer className={"absolute mt-24"}/>
    </div>
  );
};

export default Herosection;
