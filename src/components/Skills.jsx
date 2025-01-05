import { motion } from "framer-motion";
import { FaGit, FaCode, FaMobile, FaServer } from "react-icons/fa";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaCode,
      skills: [
        { name: "React.js", level: 80 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: FaServer,
      skills: [
        { name: "Node.js", level: 70 },
        { name: "APIs", level: 80 },
        { name: "Database Design", level: 80 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: FaGit,
      skills: [
        { name: "Nextjs", level: 70 },
        { name: "Git & GitHub", level: 80 },
        { name: "Command Line", level: 80 },
        { name: "Linux", level: 70 },
      ],
    },
    {
      title: "Electronics",
      icon: FaMobile,
      skills: [
        { name: "Circuit Design", level: 80 },
        { name: "Microcontrollers", level: 90 },
        { name: "PCB Design", level: 70 },
        { name: "Embedded Systems", level: 85 },
      ],
    },
  ];

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
            {`Technical Skills`}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 rounded-xl p-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-blue-400 text-2xl" />
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    variants={itemVariants}
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="bg-gradient-to-r from-[#dc143c] to-[#ff4d6d] text-transparent bg-clip-text">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#b01030] to-[#dc143c]"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <h3 className="text-xl font-semibold text-white mb-6">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving",
              "Team Leadership",
              "Project Management",
              "UI/UX Design",
              "Technical Writing",
              "System Design",
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full"
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
