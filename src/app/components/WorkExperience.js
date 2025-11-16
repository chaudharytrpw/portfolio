"use client";

import { motion } from "framer-motion";

// A reusable variant for items that fade and slide up
const fadeUpVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// A container for staggering children animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function WorkExperience() {
  const experienceData = [
    {
      title: "Training – Frontend Developer",
      year: "February 2024 - December 2024",
      desc: "Completed hands-on training in HTML, CSS, and basic JavaScript. Learned React.js fundamentals, web standards, semantic markup, and responsive layout principles.",
      tag: "HTML / CSS / JS / React.js",
      progress: "60%",
    },
    {
      title: "Internship – Frontend Developer",
      year: "January 2025 - March 2025",
      desc: "Worked on real-world web projects involving responsive UI development using React.js and Tailwind CSS. Collaborated with senior developers and participated in daily stand-ups.",
      tag: "React.js / Tailwind / Git",
      progress: "75%",
    },
    {
      title: "Frontend Developer – React & Next.js",
      year: "April 2025 - Present",
      desc: "Working as a Frontend Developer where I build modern, responsive, and user-friendly interfaces using React and Next.js. Along with my frontend role, I’m also learning TypeScript, Node.js, and PostgreSQL to expand my skill set and move toward full-stack development.",
      tag: "React / Next.js / TypeScript / Learning Node.js & PostgreSQL",
      progress: "75%",
    },
  ];

  return (
    <section className="bg-[#fefefe] py-20 px-4 md:px-10">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeUpVariant}
          className="text-3xl md:text-4xl font-bold text-blue-900"
        >
          Work Experience
        </motion.h2>
        <motion.p variants={fadeUpVariant} className="text-gray-600 mt-2">
          I began with simple HTML and CSS, and over time, I’ve grown into
          someone who builds complete, modern frontend applications with React
          and Next.js.
        </motion.p>
        <motion.div
          variants={fadeUpVariant}
          className="w-20 h-[2px] bg-red-500 mt-4 mx-auto"
        />
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow p-6 flex flex-col"
            variants={fadeUpVariant}
            whileHover={{
              y: -8,
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#3B5998]">
                {exp.title}
              </h3>
              <p className="text-sm text-red-500 mt-1 font-medium">
                {exp.year}
              </p>
              <p className="text-gray-700 mt-4 text-sm">{exp.desc}</p>
            </div>

            <div className="mt-6">
              <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                {exp.tag}
              </span>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-[#3B5998] h-2 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: exp.progress }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5, // Start after the card has appeared
                    ease: [0.25, 1, 0.5, 1],
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
