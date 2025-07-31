'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiPostgresql, SiNextdotjs, SiMongodb, SiTailwindcss, SiPrisma } from 'react-icons/si';

const projects = [
  {
    title: 'Portfolio Website',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    description: 'A responsive portfolio to showcase my skills and experience.',
    link: '#',
  },
  {
    title: 'E-commerce Website',
    projectName: 'Ayumcure',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'An e-commerce platform to manage products, orders, and users.',
    link: 'https://ayumcure.com/',
  },
  {
    title: 'Blog Platform',
    projectName: 'Betel Jobs',
    tech: ['Next.js', 'PostgreSQL', 'Node.js'], // Corrected 'node js' to 'Node.js' for consistency
    description: 'A dynamic blogging system with authentication and dashboard.',
    link: 'https://beteljobs.trpwpartners.com/',
  },
];

const techIcons = {
  React: <FaReact className="text-sky-500" />,
  'Next.js': <SiNextdotjs className="text-black" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  PostgreSQL: <SiPostgresql className="text-blue-700" />,
  MongoDB: <SiMongodb className="text-green-700" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
  Prisma: <SiPrisma className="text-indigo-600" />,
};

// Animation variants for the container of the project cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

// Animation variants for each individual project card
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Projects() {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-blue-900"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some projects I've built recently
        </motion.p>
        <motion.div
          className="w-20 h-[2px] bg-red-500 mt-4 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'circOut' }}
        />
      </div>

      {/* Grid container with stagger animation */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Animate when 10% of the grid is visible
      >
        {projects.map((proj, index) => (
          // Individual card with its own animation and hover effect
          <motion.div
            key={index}
            className="bg-[#fefefe] rounded-lg shadow p-6 flex flex-col" // Use flex-col to push link to the bottom
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }} // Lift effect on hover
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex-grow"> {/* This div will grow, pushing the link down */}
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {proj.projectName || proj.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                    <span
                    key={i}
                    className="flex items-center gap-1.5 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                    {techIcons[tech] ?? <FaDatabase className="text-gray-500" />} {tech}
                    </span>
                ))}
                </div>
            </div>

            <a
              href={proj.link}
              className="text-red-500 hover:underline text-sm font-semibold mt-auto" // mt-auto pushes it to the bottom
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}