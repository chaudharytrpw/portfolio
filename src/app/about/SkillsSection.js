'use client';

import { motion } from 'framer-motion';

// --- HELPER FUNCTION ---
// This function determines the bar color based on the skill percentage.
// It makes the JSX cleaner and the logic easier to manage.
const getBarColor = (value) => {
  const percentage = parseInt(value, 10); // Convert string '90%' to number 90
  if (percentage >= 85) {
    return 'bg-green-500'; // Expert
  }
  if (percentage >= 70) {
    return 'bg-blue-500'; // Proficient
  }
  return 'bg-red-500'; // Developing
};


// Animation variants for container elements to stagger their children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for individual text items
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function SkillsSection() {
  const skills = [
    { name: 'React', value: '90%' },
    { name: 'Next.js', value: '85%' },
    { name: 'Node.js', value: '75%' },
    { name: 'PostgreSQL', value: '65%' },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Content - Animate as a staggered group */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-blue-900"
          >
            Frontend and Backend Developer
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-14 h-[2px] bg-red-500 mt-2 mb-6"
          />

          <motion.p
            variants={itemVariants}
            className="text-gray-700 mb-6 text-sm leading-relaxed"
          >
            I specialize in building scalable web applications using modern technologies. With a strong grasp of both frontend and backend tools, I create responsive, performant, and secure applications.
          </motion.p>

          {/* This button is ready to be used, just uncomment it. */}
          {/* <motion.a
            href="/CV_Mritunjay.pdf"
            download
            className="inline-block mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a> */}
        </motion.div>

        {/* Right: Skill Bars - Stagger the appearance of each bar */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-blue-900 font-semibold">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-gray-500">
                    {skill.value}
                </span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <motion.div
                  className={`h-3 rounded-full ${getBarColor(skill.value)}`}
                  initial={{ width: '0%' }}
                  whileInView={{ width: skill.value }}
                  viewport={{ once: true }} // Corrected typo here
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}