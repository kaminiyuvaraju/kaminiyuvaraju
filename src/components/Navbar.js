import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Certificates",
    "Education",
    "CodingProfiles",
    "Resume",
    "Contact",
  ];

  return (
    <motion.nav
      className="bg-white shadow-md fixed w-full z-50 top-0"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.h1
            className="text-xl font-bold text-indigo-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Kamini Yuvaraju's Portfolio
          </motion.h1>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-indigo-600 font-medium transition"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
