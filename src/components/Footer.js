import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-6 text-center text-gray-600 text-sm shadow-inner"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="hover:text-indigo-600 transition-colors duration-300 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Kamini Yuvaraju. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
