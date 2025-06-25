import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-indigo-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            📬 Contact
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Feel free to reach out for collaboration, project inquiries, or opportunities.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 text-indigo-600 text-lg"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FaEnvelope />,
                label: "kaminiyuvaraju@gmail.com",
                href: "mailto:kaminiyuvaraju@gmail.com",
              },
              {
                icon: <FaPhoneAlt />,
                label: "+91 6305763683",
                href: "tel:+91 6305763683",
              },
              {
                icon: <FaLinkedin />,
                label: "LinkedIn",
                href: "https://linkedin.com/in/kamini-yuvaraju",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-800 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {item.icon}
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
