'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ JS-compatible import

// Default navigation items
const defaultNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Project', href: '/project' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar({
  navItems = defaultNavItems,
  textColor = 'text-gray-800',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll(); // Check on initial load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  const navClasses = `
    sticky top-0 z-50 
    w-full 
    transition-all duration-300 
    backdrop-blur-md 
    ${textColor}
    ${hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/icon_converted.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-lg relative pb-1 transition-colors duration-300 ${
                    pathname === item.href
                      ? 'font-bold text-indigo-600'
                      : 'hover:text-indigo-600'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 transition-all duration-300 ${
                      pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
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
              className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with framer-motion animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 ${
                    pathname === item.href ? 'font-bold text-indigo-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
