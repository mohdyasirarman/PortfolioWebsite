import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const timelineItems = [
    {
      icon: FaGraduationCap,
      title: "B.Tech in Progress",
      date: "2025-2027",
      description: "Currently pursuing B.Tech degree",
    },
    {
      icon: FaGraduationCap,
      title: "Diploma in Electronics",
      date: "2022-2025 Completed",
      description: "From Jamia Millia Islamia Central University",
    },
    {
      icon: MdWork,
      title: "Software Development Experience",
      date: "Ongoing",
      description:
        "Working on various software projects and gaining hands-on experience",
    },
  ];
  const notify = () => toast("Downloading CV is not available right now.");
  const navigate = useNavigate();
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#151515] py-20 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-[#dc143c] to-[#ff4d6d] text-transparent bg-clip-text">
            {`About Me`}
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={itemVariants}
        >
          <motion.div
            className="space-y-6 text-gray-300"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed">
              {` I am a passionate Software Engineer with a strong foundation in electronics from 
              Jamia Millia Islamia Central University. My journey in technology began with 
              electronics, and I've since expanded into software development, combining both 
              worlds to create innovative solutions.`}
            </p>
            <p className="text-lg leading-relaxed">
              {` With a focus on full-stack development, I enjoy building applications that solve 
              real-world problems. My background in electronics gives me a unique perspective 
              on software development, especially in areas where hardware and software intersect.`}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                onClick={() => navigate("/projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#dc143c] text-white rounded-lg flex items-center gap-2 hover:bg-[#b01030] transition-colors"
              >
                {`View Projects`}
              </motion.button>
              <motion.button
                 onClick={notify}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                {`Download CV`}
              </motion.button>
            </div>
          </motion.div>

          <motion.div className="space-y-8" variants={itemVariants}>
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <item.icon className="text-blue-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-blue-400 text-sm mb-2">{item.date}</p>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="mt-20" variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">
            {`Technical Expertise`}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Linux",
              "Electronics",
              "Git",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-4 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <span className="text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <ToastContainer className={"absolute mt-24"} />
    </motion.div>
  );
};

export default About;
