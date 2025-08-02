'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';

// === Animation Variants (unchanged) ===
const imageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const borderVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: 'circOut' },
  },
};

const imageVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const columnVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

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

        {/* === Image === */}
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
              src="/img/female-3-150x150.jpg" // Replace with your actual image path
              alt="Mritunjay Chaudhary"
              width={400}
              height={500}
              className="rounded-lg object-cover w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* === Left Column: Bio === */}
        <motion.div
          className="lg:col-span-1 space-y-4"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 variants={textVariants} className="text-2xl md:text-3xl font-bold text-blue-900">
            Full Stack Developer <br /> Passionate About Clean Code
          </motion.h3>
          <motion.div variants={textVariants} className="w-14 h-[2px] bg-red-500 mb-4" />

          <motion.p variants={textVariants} className="text-gray-700 text-sm leading-relaxed">
            I'm Mritunjay Chaudhary, a Full Stack Developer specialized in building modern, scalable web applications using <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>PostgreSQL</strong>. I focus on clean architecture, performance, and intuitive user experiences.
          </motion.p>

          <motion.p variants={textVariants} className="text-gray-700 text-sm">
            I love solving complex problems and turning ideas into real products using technologies like <strong>Tailwind CSS</strong> and modern frontend tooling.
          </motion.p>

          <motion.p variants={textVariants} className="text-blue-900 font-bold text-base">
            📩 chaudharymritunjay981@gmail.com
          </motion.p>
        </motion.div>

        {/* === Right Column: Skills & Socials === */}
        <motion.div
          className="lg:col-span-1 space-y-4"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 variants={textVariants} className="text-2xl md:text-3xl font-bold text-blue-900">
            Tech Stack & Connect With Me
          </motion.h3>
          <motion.div variants={textVariants} className="w-14 h-[2px] bg-red-500 mb-4" />

          <motion.p variants={textVariants} className="text-gray-700 text-sm leading-relaxed">
            🔧 Skilled in React, Next.js, Node.js, PostgreSQL, Tailwind CSS, Express, Git, REST APIs, and more.
          </motion.p>

          {/* Social Icons */}
          <motion.div variants={textVariants} className="flex space-x-4 pt-4">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://www.linkedin.com/in/er.m.k.chaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-xl"
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://www.instagram.com/er.m.k.chaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-xl"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://wa.me/919876543210?text=Hi%20Mritunjay%2C%20I%20saw%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-xl"
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-xl"
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
