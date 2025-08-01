'use client';

import { useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const LoaderComponent = ({ show }) => {
  useEffect(() => {
    // Initialize Notiflix loader with custom styling
    Loading.init({
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      svgColor: '#3B5998', // red-500 color
      clickToClose: false,
      svgSize: '80px',
    });

    if (show) {
      Loading.circle(); // Show loader without message
    } else {
      Loading.remove(); // Hide loader
    }

    return () => Loading.remove(); // Cleanup on unmount
  }, [show]);

  return null; // This component doesn't render any HTML
};

export default LoaderComponent;
