'use client';

import { useState } from 'react';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import LoaderComponent from '../components/LoaderComponent';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setIsLoading(true)
 

  try {
    const res = await axios.post('/api/contact', formData);
    
    console.log('✅ Response from /api/contact:', res); // 💥 better visibility

    Notify.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    const errMsg =
      error?.response?.data?.error || 'Something went wrong. Please try again.';
    console.error('❌ Email sending failed:', error); // show full error
    Notify.failure(errMsg);
  }finally{
    setIsLoading(false)
  }
};

  return (

    <>
    
    <LoaderComponent show={isLoading}/>
  
    <motion.section
      className="py-20 px-4 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Info boxes */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
      >
        <motion.div className="bg-white shadow rounded-lg p-6 text-center" variants={itemVariants} whileHover={{ y: -5, scale: 1.03 }}>
          <FaPhoneAlt className="text-red-500 text-3xl mb-3 mx-auto" />
          <p className="text-blue-900 font-semibold">7324892379</p>
          <p className="text-gray-600 text-sm">Monday - Friday from 7am - 5pm</p>
        </motion.div>

        <motion.div className="bg-white shadow rounded-lg p-6 text-center" variants={itemVariants} whileHover={{ y: -5, scale: 1.03 }}>
          <FaMapMarkerAlt className="text-red-500 text-3xl mb-3 mx-auto" />
          <p className="text-blue-900 font-semibold">Hariyana , Gurugram</p>
          <p className="text-gray-600 text-sm">Sector 17</p>
        </motion.div>

        <motion.div className="bg-white shadow rounded-lg p-6 text-center" variants={itemVariants} whileHover={{ y: -5, scale: 1.03 }}>
          <FaEnvelope className="text-red-500 text-3xl mb-3 mx-auto" />
          <p className="text-blue-900 font-semibold">chaudharymritunjay981@gmail.com</p>
          <p className="text-gray-600 text-sm">Contact me any time!</p>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <motion.h3 className="text-2xl font-bold text-blue-900 mb-2" variants={itemVariants}>
          Get In Touch
        </motion.h3>
        <motion.div
          className="w-14 h-[2px] bg-red-500 mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            variants={itemVariants}
          />
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            variants={itemVariants}
          />
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Enter your message"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            variants={itemVariants}
          />
          <motion.button
            type="submit"
            className="bg-[#3B5998] text-white px-6 py-2 rounded transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>


      </>
  );
}
