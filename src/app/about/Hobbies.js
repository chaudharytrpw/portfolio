'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const heroItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Hobbies() {
  return (
    <section className="bg-[#f4f4f4] text-gray-800 overflow-x-hidden">
      
      {/* Hero Section - Cricket Lover */}
      <div className="relative h-[60vh] flex items-center justify-center text-white">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Image
            src="/img/hobbies/cricket_1.jpg"
            alt="A cricket player hitting a shot"
            fill
            className="object-cover opacity-40"
            priority
          />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6 sm:px-10 md:px-16 lg:px-24"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl md:text-5xl font-bold text-[#3B5998] text-shadow-md"
          >
            Cricket Lover
          </motion.h1>
          <motion.p
            variants={heroItemVariants}
            className="mt-2 text-sm md:text-base max-w-md mx-auto text-shadow"
          >
            From gully cricket to global tournaments — it’s a passion.
          </motion.p>
        </motion.div>
      </div>

      {/* Content Blocks */}
      <div className="max-w-6xl mx-auto py-20 px-4 space-y-24">

        {/* Virat Kohli Block */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/img/hobbies/cricket_2.jpg"
              alt="Virat Kohli celebrating on the cricket field"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-3">Virat Kohli – My Inspiration</h2>
            <p className="mb-4 text-gray-600">
              Virat Kohli mujhe sirf isliye inspire nahi karte kyunki wo ek shandar cricketer hain — 
              balki unki mehnat, lagan, aur kabhi na haar manane wali soch mujhe motivate karti hai. 
              Wo har match mein pure jazbe ke sath khelte hain, failures ke baad bhi aur zyada strong hokar laut te hain. 
              Unka safar ek reminder hai ki agar dedication ho to kuch bhi mumkin hai.
            </p>
          </motion.div>
        </div>

        {/* Chess Enthusiast Block */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/img/hobbies/chess.jpg"
              alt="A chess board with pieces set up"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-3">Chess Enthusiast</h2>
            <p className="mb-4 text-gray-600">
              I enjoy playing chess in my free time. It sharpens my focus, strategy, and decision-making skills.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
