import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "yasirarman9876@gmail.com",
      link: 'mailto:yasirarman9876@gmail.com',
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/yourusername",
      link: "https://github.com/yourusername",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      link: "https://linkedin.com/in/yourusername",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "New Delhi, India",
      link: null,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

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
            {`Get in Touch`}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-8">
              {`Let's Connect`}
            </h3>
            <p className="text-gray-400 mb-8">
              {`I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out through any of these channels:`}
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <item.icon className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  {`Name`}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  {`Email`}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  {`Message`}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className=" w-full  px-6 py-3 bg-[#dc143c] text-white rounded-lg flex items-center gap-2 hover:bg-[#b01030] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="w-full text-center">{`Send Message`}</p>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
