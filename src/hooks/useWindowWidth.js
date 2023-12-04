import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  console.log(windowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowWidth;
};
