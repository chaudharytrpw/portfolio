'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// A reusable variant for items that fade and slide up
const fadeUpVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// A container for staggering children animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amit Sharma',
      image: '/img/images (1).jpg',
      text: 'Mritunjay did a fantastic job on our project. His frontend work using React and Tailwind was smooth and pixel-perfect. Highly recommended!',
    },
    {
      name: 'Priya Mehta',
      image: '/img/female-3-150x150.jpg',

      text: 'We hired Mritunjay for a full-stack application using Next.js and PostgreSQL. He delivered the project on time with clean and scalable code.',
    },
    {
      name: 'Ravi Kumar',
      image: '/img/images (2).jpg',
      text: 'He understood our requirements perfectly and implemented everything from backend APIs to responsive UI. Very professional and committed.',
    },
  ];

  return (
    <section className="bg-[#fdfafa] py-20 px-4 md:px-10">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold text-blue-900">
          What Clients Say About Me
        </motion.h2>
        <motion.p variants={fadeUpVariant} className="text-gray-600 mt-2">
          Here’s what people say after working with me on real projects.
        </motion.p>
        <motion.div variants={fadeUpVariant} className="w-20 h-[2px] bg-red-500 mt-4 mx-auto" />
      </motion.div>

      {/* Testimonial Cards */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {testimonials.map((client, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-8 text-center flex flex-col"
            variants={fadeUpVariant}
            whileHover={{ y: -10, scale: 1.03, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <div className="flex-grow">
              <motion.div
                className="text-red-500 text-5xl font-bold mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5, type: 'spring', stiffness: 300 }}
              >
                ❝
              </motion.div>

              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full border-4 border-red-500 overflow-hidden p-1 bg-white">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">{client.text}</p>
            </div>

            {/* Footer */}
            <div className="mt-auto">
              <div className="w-8 h-px bg-red-400 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 tracking-wide">{client.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}