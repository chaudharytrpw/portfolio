'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const textItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const socialContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const socialIconVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const circleImageVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function HomeBanner() {
  return (
    <section className="bg-[#FBEFD4] py-16 md:py-25  lg:py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left: Text + Social Icons */}
        <div className="w-full md:w-1/2 flex items-start gap-4 text-center md:text-left">
          {/* Social Icons */}
          <motion.div
            className="hidden md:flex flex-col items-center gap-4 text-2xl mt-2"
            variants={socialContainerVariants}
          >
            <motion.a
              href="https://www.linkedin.com/in/mritunjay-chaudhary-356135306/"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-[#0A66C2]"
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/er.m.k.chaudhary"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-[#E1306C]"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://wa.me/7324892379"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-[#25D366]"
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>

          {/* Intro Text */}
          <motion.div variants={containerVariants} className="flex flex-col items-center md:items-start">
            <motion.p variants={textItemVariants} className="text-lg sm:text-xl text-gray-600 font-medium mb-2">
              👋 Hello, I’m
            </motion.p>

            <motion.h2
              variants={textItemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B5998] leading-tight"
            >
              Mritunjay Chaudhary
            </motion.h2>

            <motion.h3
              variants={textItemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-gray-800"
            >
              Full Stack Developer
            </motion.h3>

            <motion.p
              variants={textItemVariants}
              className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed max-w-md"
            >
              I specialize in building modern, scalable web applications using React, Node.js,
              Express, and PostgreSQL. I care about clean code, intuitive UX, and performance.
            </motion.p>

            <motion.button
              variants={textItemVariants}
              className="mt-8 bg-[#3B5998] text-white px-8 py-3 rounded-lg shadow-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          variants={circleImageVariants}
        >
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-8 border-[#3B5998] overflow-hidden shadow-2xl">
            <Image
              src="/img/profile.png"
              alt="Mritunjay Chaudhary"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
