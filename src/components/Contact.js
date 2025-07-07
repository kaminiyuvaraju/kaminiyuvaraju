import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "kaminiyuvaraju@gmail.com",
      href: "mailto:kaminiyuvaraju@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 6305763683",
      href: "tel:+916305763683",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "kamini-yuvaraju",
      href: "https://linkedin.com/in/kamini-yuvaraju",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "@kaminiyuvaraju",
      href: "https://instagram.com/kaminiyuvaraju",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "+91 6305763683",
      href: "https://wa.me/916305763683",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="bg-white p-10 rounded-3xl shadow-xl transition duration-300 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-indigo-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            📬 Let's Connect
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I’m open to freelance work, collaborations, or just a friendly hello!
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-indigo-600 text-base"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-50 hover:bg-indigo-100 rounded-xl p-5 flex flex-col items-center shadow hover:shadow-md transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-semibold">{item.label}</div>
                <div className="text-sm text-gray-700 mt-1">{item.value}</div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
