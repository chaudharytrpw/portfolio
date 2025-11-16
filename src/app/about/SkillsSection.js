'use client';

import { motion } from 'framer-motion';

// --- HELPER FUNCTION ---
const getBarColor = (value) => {
  const percentage = parseInt(value, 10);
  if (percentage >= 85) return 'bg-green-500';
  if (percentage >= 70) return 'bg-blue-500';
  return 'bg-red-500';
};

// Animation variants
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
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function SkillsSection() {
  const skills = [
    { name: 'React', value: '90%' },
    { name: 'Next.js', value: '85%' },
    { name: 'Node.js', value: '65%' },
    { name: 'TypeScript', value: '80%' }, 
    { name: 'PostgreSQL', value: '50%' },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left */}
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
        </motion.div>

        {/* Right: Skill Bars */}
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
                  viewport={{ once: true }}
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
