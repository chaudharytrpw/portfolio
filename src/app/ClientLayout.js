'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
// import CustomizerSidebar from './components/CustomizerSidebar';
import { FaPalette } from 'react-icons/fa';
import Footer from './components/Footer';

export default function ClientLayout({ children }) {
  // --- 1. Set initial state for colors ---
  const [font, setFont] = useState('font-sans');
  const [bgColor, setBgColor] = useState('#ffffff'); // Hex for white
  const [textColor, setTextColor] = useState('#1f2937'); // Hex for text-gray-800
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Use inline styles for dynamic colors that can be any hex value
  const pageStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  
  // Create an inverted style for the button to ensure contrast
  const buttonStyle = {
    backgroundColor: textColor, // Use page text color for button background
    color: bgColor,          // Use page background color for button text
  };

  return (
    <div
      style={pageStyle}
      className={`${font} min-h-screen transition-all duration-300`}
    >
      {/* Navbar receives the hex colors to pass down to its own elements if needed */}
      <Navbar bgColor={bgColor} textColor={textColor} />

      <main className="flex-grow">{children}</main>

      {/* CustomizerSidebar needs the current colors to highlight the active swatches */}
      {/* <CustomizerSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentFont={font}
        currentBgColor={bgColor}
        currentTextColor={textColor}
        onFontChange={setFont}
        onColorChange={setBgColor}
        onTextColorChange={setTextColor}
      /> */}

      {/* --- 2. Floating Customize Button with dynamic styles --- */}
      {/* <button
        onClick={() => setSidebarOpen(true)}
        style={buttonStyle} 
        className="fixed right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 shadow-md border rounded-l-full flex items-center gap-2 z-30 transition-colors duration-300"
      >
        <FaPalette /> 
        <span className="font-medium">Customize</span>
      </button> */}

      <Footer />
    </div>
  );
}