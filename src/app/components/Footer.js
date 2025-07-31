// app/components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

// SVG Logo Component
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

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaBehance, href: '#', label: 'Behance' },
  { icon: FaDribbble, href: '#', label: 'Dribbble' },
];

// --- ANIMATION VARIANTS ---

// Container to orchestrate the whole footer animation
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

// For individual items like the logo, email, and copyright
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// For the social icons container to stagger each icon
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
        {/* Top: Socials + Logo + Email */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Social Media */}
          <motion.div
            className="flex items-center space-x-5 order-2 md:order-1"
            variants={socialContainerVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-white hover:text-red-400 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Logo in the Center */}
          {/* <motion.div className="order-1 md:order-2" variants={itemVariants}>
            <Logo />
          </motion.div> */}

          {/* Contact Email */}
          <motion.div className="order-3" variants={itemVariants}>
            <Link
              href="mailto:mritunjay@example.com"
              className="font-serif text-xl tracking-wider text-white hover:text-red-400 transition-colors"
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

        {/* Bottom: Copyright */}
        <motion.div className="py-8 text-center" variants={itemVariants}>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mritunjay Chaudhary — All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}