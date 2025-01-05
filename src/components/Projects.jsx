import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
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

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design with canvas design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion","Canvas Api"],
      github: "https://github.com/mohdyasirarman/PortfolioWebsite",
      live: "/",
      image: "/static/img/potfolio_img.png",
    },
    {
      title: "All-Assignment-Help",
      description:
        "A freelance project for a client, built with React and Tailwind CSS with colaboration of devs. I created the whole front-end of the website.",
      technologies: [ "Nextjs", "React", "Tailwind CSS", "express", "sql"],
      github: "https://github.com/mohdyasirarman/All-Assignment-Help",
      live: "https://all-assignment-help-seven.vercel.app",
      image: "/static/img/All-Assignment-Help_img.png",
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
            {`My Projects`}
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-center"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub className="text-white text-xl" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-white text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12" variants={itemVariants}>
          <a
            href="https://github.com/mohdyasirarman/PortfolioWebsite"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#dc143c] text-white rounded-lg hover:bg-[#b01030] transition-colors"
          >
            <FaGithub className="text-xl" />
            {`View More on GitHub`}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
