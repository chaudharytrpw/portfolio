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
              src="/img/female-3-150x150.jpg"
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
            Frontend Developer <br /> Growing Into Full Stack
          </motion.h3>

          <motion.div variants={textVariants} className="w-14 h-[2px] bg-red-500 mb-4" />

          <motion.p variants={textVariants} className="text-gray-700 text-sm leading-relaxed">
            I'm <strong>Mritunjay Chaudhary</strong>, a Frontend Developer who enjoys creating
            clean, responsive, and user-friendly web interfaces using 
            <strong> React</strong>, <strong>Next.js</strong>, and <strong>JavaScript</strong>.
          </motion.p>

          <motion.p variants={textVariants} className="text-gray-700 text-sm leading-relaxed">
            Along with my frontend work, I’m actively learning 
            <strong> TypeScript</strong>, <strong>Node.js</strong>, and 
            <strong> PostgreSQL</strong> to expand my skills and grow into a complete
            full-stack developer. I enjoy understanding how things work behind the scenes.
          </motion.p>

          <motion.p variants={textVariants} className="text-gray-700 text-sm leading-relaxed">
            Every project helps me improve—from optimizing UI components to integrating APIs 
            and writing cleaner, scalable code. I believe in continuous learning and 
            building products that genuinely help people.
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
            🔧 Skilled in React, Next.js, JavaScript, Tailwind CSS, Git, REST APIs, and currently
            learning TypeScript, Node.js & PostgreSQL to become a full-stack developer.
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
