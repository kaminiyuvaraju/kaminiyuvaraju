import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <motion.section
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-24 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm Kamini Yuvaraju
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl font-medium mb-8 h-[40px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              "Software Engineer @ Achala IT Solutions",
              2000,
              "FastAPI • GraphQL • MongoDB",
              2000,
              "GATE 2025 Qualified (DS & AI)",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.a
          href="#contact"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-100 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Let’s Connect
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;
