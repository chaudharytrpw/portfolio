'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// --- ANIMATION VARIANTS ---

// Container to orchestrate the whole component animation on scroll
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

// For text items sliding up, with your requested transition
const textItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }, // Your requested transition
  },
};

// For social icons
const socialContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const socialIconVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// For the circular image, with your requested transition
const circleImageVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: 'easeOut', // Your requested transition
        },
    },
};

export default function HomeBanner() {
  return (
    <section className="bg-[#FBEFD4] py-20 lg:py-10 overflow-hidden">
      {/* 
        The main container now triggers on scroll (`whileInView`)
        and only runs the animation once (`viewport`).
      */}
      <motion.div
        className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left: Social Icons + Text */}
        <div className="w-full lg:w-1/2 flex items-start gap-6 text-center lg:text-left">
          {/* Social Icons Column */}
          <motion.div
            className="hidden lg:flex lg:flex-col items-center gap-4 text-3xl mt-2"
            variants={socialContainerVariants}
          >
            <motion.a href="#" variants={socialIconVariants} whileHover={{ scale: 1.2, y: -3 }} className="text-[#0A66C2]"><FaLinkedinIn /></motion.a>
            <motion.a href="#" variants={socialIconVariants} whileHover={{ scale: 1.2, y: -3 }} className="text-[#E1306C]"><FaInstagram /></motion.a>
            <motion.a href="#" variants={socialIconVariants} whileHover={{ scale: 1.2, y: -3 }} className="text-[#25D366]"><FaWhatsapp /></motion.a>
          </motion.div>

          {/* Intro Text */}
          <motion.div variants={containerVariants}>
            <motion.h1 variants={textItemVariants} className="text-3xl sm:text-4xl md:text-5xl text-[#3B5998] font-bold leading-tight">I'm a Full Stack Developer</motion.h1>
            <motion.h2 variants={textItemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight text-gray-800">Mritunjay Chaudhary</motion.h2>
            <motion.p variants={textItemVariants} className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed">
              I specialize in building modern, scalable web applications using React, Node.js, Express, and PostgreSQL. I'm passionate about clean code, intuitive UX, and performance.
            </motion.p>
            <motion.button variants={textItemVariants} className="mt-8 bg-[#3B5998] text-white px-8 py-3 rounded-lg shadow-lg transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          variants={circleImageVariants}
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border-8 border-[#3B5998] overflow-hidden shadow-2xl">
            <Image
              src="/img/profile.png" // Use your actual image path
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