'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, Brain, Heart } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const slideInFromLeft = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInFromRight = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hobbies() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 text-gray-900 overflow-hidden">
      
      {/* Hero Section - Cricket Lover */}
    

      {/* Content Blocks */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-24 px-4 sm:px-6 space-y-16 sm:space-y-24 md:space-y-32">

        {/* Virat Kohli Block */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            className="order-2 md:order-1"
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4" />
              Cricket Lover
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
              Virat Kohli – <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                My Inspiration
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Virat Kohli mujhe sirf isliye inspire nahi karte kyunki wo ek shandar cricketer hain — 
                balki unki mehnat, lagan, aur kabhi na haar manane wali soch mujhe motivate karti hai.
              </p>
              <p>
                Wo har match mein pure jazbe ke sath khelte hain, failures ke baad bhi aur zyada strong hokar laut te hain. 
                Unka safar ek reminder hai ki agar dedication ho to kuch bhi mumkin hai.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {['Dedication', 'Resilience', 'Excellence'].map((trait, i) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium shadow-lg"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative">
                <Image
                  src="/img/hobbies/cricket_2.jpg"
                  alt="Virat Kohli celebrating on the cricket field"
                  width={700}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chess Enthusiast Block */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative">
                <Image
                  src="/img/hobbies/chess.jpg"
                  alt="A chess board with pieces set up"
                  width={700}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Brain className="w-4 h-4" />
              Strategic Mind
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
              Chess <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Enthusiast
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                I enjoy playing chess in my free time. It sharpens my focus, strategy, and decision-making skills—qualities that translate beautifully into problem-solving in life and work.
              </p>
              <p>
                Every game is a mental workout, teaching patience, foresight, and the art of thinking several moves ahead.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {['Strategy', 'Focus', 'Patience'].map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium shadow-lg"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative element */}
      {/* <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" /> */}
    </section>
  );
}