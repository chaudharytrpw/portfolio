'use client';

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Define animation variants for a container and its items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will make the children animate one by one
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // Start 20px below and invisible
  visible: {
    y: 0,
    opacity: 1, // End at original position and fully visible
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactSection() {
  return (
    // Animate the entire section as it comes into view
    <motion.section
      className="py-20 px-4 md:px-10"
      initial="hidden"
      whileInView="visible" // Triggers animation when the element is in the viewport
      viewport={{ once: true, amount: 0.2 }} // Animate once when 25% of it is visible
      variants={containerVariants}
    >
      {/* Top Info Boxes - Stagger the animation for each box */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
      >
        {/* Each info box will animate in using the itemVariants */}
        <motion.div
          className="bg-white shadow rounded-lg p-6 text-center"
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.03 }} // Add a subtle lift and scale on hover
        >
          <FaPhoneAlt className="text-red-500 text-3xl mb-3 mx-auto" />
          <p className="text-blue-900 font-semibold">7324892379</p>
          <p className="text-gray-600 text-sm">Monday - Friday from 7am - 5pm</p>
        </motion.div>

        <motion.div
          className="bg-white shadow rounded-lg p-6 text-center"
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.03 }}
        >
          <FaMapMarkerAlt className="text-red-500 text-3xl mb-3 mx-auto" />
          <p className="text-blue-900 font-semibold">Hariyana , Gurugram</p>
          <p className="text-gray-600 text-sm">sector 17</p>
        </motion.div>

        <motion.div
          className="bg-white shadow rounded-lg p-6 text-center"
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.03 }}
        >
          <FaEnvelope className="text-red-500 text-3xl mb-3 mx-auto" />
          <p className="text-blue-900 font-semibold">chaudharymritunjay981@gmail.com</p>
          <p className="text-gray-600 text-sm">Contact me every time!</p>
        </motion.div>
      </motion.div>

      {/* Contact Form Container */}
      <motion.div
        className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8"
        // Animate the form container separately after the info boxes
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants} // Re-using the item variant for a simple fade-up
      >
        <motion.h3
          className="text-2xl font-bold text-blue-900 mb-2"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h3>
        <motion.div
          className="w-14 h-[2px] bg-red-500 mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Animate form fields with a stagger effect */}
        <motion.form
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            variants={itemVariants}
          />
          <motion.input
            type="email"
            placeholder="Enter email address"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            variants={itemVariants}
          />
          <motion.textarea
            rows="4"
            placeholder="Enter your message"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            variants={itemVariants}
          />
          <motion.button
            type="submit"
            className="bg-[#3B5998] text-white px-6 py-2 rounded  transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}