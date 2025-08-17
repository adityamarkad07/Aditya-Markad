import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <FaEnvelope className="text-gray-800 text-xl" />,
    label: "Email",
    value: "adityamarkad07@gmail.com",
    link: "mailto:adityamarkad07@gmail.com",
    color: "text-green-700",
  },
  {
    icon: <FaPhoneAlt className="text-blue-700 text-xl" />,
    label: "Phone",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    color: "text-green-700",
  },
  {
    icon: <FaGithub className="text-gray-800 text-xl" />,
    label: "GitHub",
    value: "github.com/yourusername",
    link: "https://github.com/yourusername",
    color: "text-green-700",
  },
  {
    icon: <FaLinkedin className="text-blue-500 text-xl" />,
    label: "LinkedIn",
    value: "www.linkedin.com/in/aditya-markad-b8892b300",
    link: "https://linkedin.com/in/aditya-markad-b8892b300",
    color: "text-green-700",
  },
  {
    icon: <FaInstagram className="text-pink-600 text-xl" />,
    label: "Instagram",
    value: "adit.yamarkad",
    link: "https://instagram.com/adit.yamarkad",
    color: "text-green-700",
  },
  {
    icon: <FaTwitter className="text-blue-400 text-xl" />,
    label: "Twitter",
    value: "@yourtwitter",
    link: "https://twitter.com/yourtwitter",
    color: "text-green-700",
  },
];

const formInitial = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(formInitial);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm(formInitial);
  };

  return (
    <motion.div
      className="min-h-screen bg-blue-100 px-6 py-16 space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Heading */}
      <motion.section
        className="text-center space-y-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-blue-800">Contact Me</h2>
        <p className="text-gray-700 max-w-xl mx-auto text-lg">
          Let's connect! Reach out for collaborations, questions, or just to say hi.
        </p>
      </motion.section>

      {/* Contact Form & Info */}
      <div className="w-[500px] mx-auto items-center">

        {/* Contact Details */}
        <motion.div
          className="space-y-6 bg-white rounded-xl shadow-md p-8"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-green-700 ">Contact Details</h3>
          <div className="space-y-4 text-gray-700 text-md">
            {contacts.map((c, idx) => (
              <motion.div
                key={c.label}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
              >
                {c.icon}
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline font-medium ${c.color}`}
                >
                  {c.value}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.footer

      > 
      </motion.footer>
    </motion.div>
  );
};

export default Contact;
