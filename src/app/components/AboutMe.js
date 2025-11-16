'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// A reusable variant for items that fade and slide up
const fadeUpVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// A container for staggering children animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Variants for the image frame animation
const imageFrameVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.3 },
  },
};

const frameVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'circOut' } },
};

const imageVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function AboutMe() {
  return (
    <section className="bg-white py-20 px-4 md:px-16 overflow-hidden">

      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUpVariant} className="text-4xl font-bold text-blue-900">
          About Me
        </motion.h2>

        {/* Human-Type Content */}
        <motion.p variants={fadeUpVariant} className="text-gray-600 mt-2 max-w-2xl mx-auto">
          I’m a Frontend Developer with 1 year of real-world experience. I love building clean,
          responsive, and user-focused interfaces using React, Next.js, and JavaScript. Recently,
          I’ve also started learning TypeScript, Node.js, and PostgreSQL as I work toward becoming
          a full-stack developer.
        </motion.p>

        <motion.div variants={fadeUpVariant} className="w-20 h-[2px] bg-red-500 mt-4 mx-auto" />
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <motion.div
          className="lg:col-span-7 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3 variants={fadeUpVariant} className="text-3xl font-bold text-blue-900">
            Developing With Passion <br /> While Continuously Learning
          </motion.h3>

          <motion.div variants={fadeUpVariant} className="w-14 h-[2px] bg-red-500" />

          <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Human-Type Paragraphs */}
            <motion.p variants={fadeUpVariant}>
              Hey, I’m Mritunjay Chaudhary — a developer who loves crafting smooth, modern, 
              and visually appealing web experiences. My main tools are React, Next.js, 
              Tailwind CSS, and JavaScript.
            </motion.p>

            <motion.p variants={fadeUpVariant}>
              I’m currently improving my skills in TypeScript to write cleaner, safer, and 
              more scalable code. Alongside this, I am learning Node.js and PostgreSQL 
              to understand backend development and eventually build complete full-stack projects.
            </motion.p>

            <motion.p variants={fadeUpVariant}>
              Over the past year, I’ve worked on projects where I improved UI design, 
              integrated APIs, boosted performance, and created user-friendly interfaces. 
              Every project teaches me something new and pushes me to grow as a developer.
            </motion.p>
          </div>

          <motion.div variants={fadeUpVariant}>
            <Link href="/contact" passHref>
              <motion.button
                className="mt-6 px-8 py-3 bg-[#3B5998] text-white rounded-lg shadow-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let’s Connect
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Frame */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          variants={imageFrameVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full max-w-sm">

            {/* Blue Frame */}
            <motion.div
              className="absolute top-4 left-4 w-full h-full bg-[#3B5998] rounded-lg z-0"
              variants={frameVariants}
            ></motion.div>

            {/* Image */}
            <motion.div className="relative z-10" variants={imageVariants}>
              <Image
                src="/img/section-1-bg1.jpg"
                alt="Mritunjay Chaudhary"
                width={400}
                height={500}
                className="rounded-lg object-cover w-full h-auto shadow-xl"
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
