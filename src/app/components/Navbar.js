'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const defaultNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Project', href: '/project' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar({ navItems = defaultNavItems, textColor = 'text-gray-800' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sidebar motion
  const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: '-100%',
      transition: { duration: 0.2 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.05 },
    }),
  };

  const navClasses = `
    fixed top-0 z-50 w-full
    transition-all duration-300
    backdrop-blur-md
    ${hasScrolled ? 'bg-[#FBEFD4] shadow-md' : 'bg-transparent'}
    ${textColor}
  `;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img src="/icon_converted.png" alt="Logo" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-lg relative pb-1 transition-colors duration-300 ${pathname === item.href
                        ? 'font-bold text-indigo-600'
                        : 'hover:text-indigo-600'
                      }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 transition-all duration-300 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hire Me Button */}
            <div className="hidden md:block">
              <a
                href="/contact"
                className="px-5 py-2 bg-[#3B5998] text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="text-2xl"
                aria-label="Toggle mobile menu"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0   z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg flex flex-col p-6"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xl font-bold text-indigo-600"
                >
                  {/* Logo */}
                  <Link href="/" className="flex-shrink-0">
                    <img src="/icon_converted.png" alt="Logo" className="h-12 w-auto object-contain" />
                  </Link>
                </motion.h2>
                <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-700">
                  <FaTimes />
                </button>
              </div>

              {/* Navigation Links with stagger */}
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-medium px-2 py-1 rounded hover:bg-gray-100 ${pathname === item.href ? 'font-bold text-indigo-600' : ''
                        }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={menuItemVariants}
                  custom={navItems.length}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 block text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                  >
                    Hire Me
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
