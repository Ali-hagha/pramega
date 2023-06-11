import React, { useState, useEffect } from 'react';

export const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isXlDesktop, setIsXlDesktop] = useState(false);
  const [is2XlDesktop, setIs2XlDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width <= 767) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
        setIsXlDesktop(false);
        setIs2XlDesktop(false);
      } else if (width <= 1023) {
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
        setIsXlDesktop(false);
        setIs2XlDesktop(false);
      } else if (width <= 1279) {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
        setIsXlDesktop(false);
        setIs2XlDesktop(false);
      } else if (width <= 1535) {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(false);
        setIsXlDesktop(true);
        setIs2XlDesktop(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(false);
        setIsXlDesktop(false);
        setIs2XlDesktop(true);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop, isXlDesktop, is2XlDesktop };
};
