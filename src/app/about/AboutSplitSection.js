'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa';

// Animation variants for the image container
const imageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren', // Animate container before its children
      staggerChildren: 0.3, // Stagger children animations
    },
  },
};

// Animation for the red border element
const borderVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: 'circOut' },
  },
};

// Animation for the image itself
const imageVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Animation for the text columns (staggered)
const columnVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4, // Start animating children after a small delay
    },
  },
};

// Animation for individual text elements
const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};


export default function AboutSplitSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
        
        {/* Image with red border */}
        <motion.div
          className="relative w-full max-w-sm mx-auto"
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="absolute top-6 left-6 w-full h-full bg-[#3B5998] rounded-lg z-0"
            variants={borderVariants}
          />
          <motion.div
            className="relative z-10 rounded-lg overflow-hidden shadow-lg"
            variants={imageVariants}
          >
            <Image
              src="/img/female-3-150x150.jpg" // Replace with your own image path
              alt="About Me"
              width={400}
              height={500}
              className="rounded-lg object-cover w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Left Content Column */}
        <motion.div
          className="lg:col-span-1 space-y-4"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 variants={textVariants} className="text-2xl md:text-3xl font-bold text-blue-900">
            Designing With Passion <br /> While Exploring The World
          </motion.h3>
          <motion.div variants={textVariants} className="w-14 h-[2px] bg-red-500 mb-4" />

          <motion.p variants={textVariants} className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
          <motion.p variants={textVariants} className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
          <motion.p variants={textVariants} className="text-gray-700 text-sm">
            Let's talk with me.
          </motion.p>
          <motion.p variants={textVariants} className="text-blue-900 font-bold text-base">
            contact@domain.com
          </motion.p>
        </motion.div>

        {/* Right Content Column */}
        <motion.div
          className="lg:col-span-1 space-y-4"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 variants={textVariants} className="text-2xl md:text-3xl font-bold text-blue-900">
            I Create Products Not Just Arts
          </motion.h3>
          <motion.div variants={textVariants} className="w-14 h-[2px] bg-red-500 mb-4" />

          <motion.p variants={textVariants} className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
          
          {/* Social Icons */}
          <motion.div variants={textVariants} className="flex space-x-4 pt-4">
            <motion.a whileHover={{ y: -3, color: '#ef4444' }} href="#" className="text-blue-900 text-xl transition-colors">
              <FaLinkedinIn />
            </motion.a>
            <motion.a whileHover={{ y: -3, color: '#ef4444' }} href="#" className="text-blue-900 text-xl transition-colors">
              <FaInstagram />
            </motion.a>
            <motion.a whileHover={{ y: -3, color: '#ef4444' }} href="#" className="text-blue-900 text-xl transition-colors">
              <FaDribbble />
            </motion.a>
            <motion.a whileHover={{ y: -3, color: '#ef4444' }} href="#" className="text-blue-900 text-xl transition-colors">
              <FaBehance />
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}