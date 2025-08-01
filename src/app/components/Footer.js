'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

// --- SVG Logo ---
const Logo = () => (
  <svg width="60" height="60" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="diagonal-stripe" patternUnits="userSpaceOnUse" width="4" height="4">
        <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
    </defs>
    <circle cx="36" cy="32" r="24" fill="#F87171" />
    <circle cx="28" cy="32" r="24" fill="url(#diagonal-stripe)" className="text-white" />
  </svg>
);

// --- Social Links ---
const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaBehance, href: '#', label: 'Behance' },
  { icon: FaDribbble, href: '#', label: 'Dribbble' },
];

// --- Animation Variants ---
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const socialContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, ease: 'easeInOut', delay: 0.4 } },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-blue-950 text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-y-8 gap-x-4 flex-wrap text-center md:text-left">
          
          {/* Social Media Icons */}
          <motion.div
            className="flex justify-center md:justify-start flex-wrap gap-5 order-3 md:order-1 w-full md:w-auto"
            variants={socialContainerVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Logo */}
          <motion.div className="order-1 md:order-2 flex justify-center w-full md:w-auto" variants={itemVariants}>
            <Logo />
          </motion.div>

          {/* Contact Email */}
          <motion.div className="order-2 md:order-3 w-full md:w-auto text-center md:text-right" variants={itemVariants}>
            <Link
              href="mailto:chaudharymritunjay981@gmail.com"
              className="font-serif text-lg md:text-xl tracking-wide text-white hover:text-red-400 transition-colors"
            >
              chaudharymritunjay981@gmail.com
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-blue-900 origin-center"
          variants={dividerVariants}
        />

        {/* Bottom Section */}
        <motion.div className="py-6 text-center" variants={itemVariants}>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mritunjay Chaudhary — All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
