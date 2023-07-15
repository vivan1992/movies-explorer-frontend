import { useState, useEffect } from 'react';
import { SCREEN_SM, SCREEN_LG } from '../utils/constBreakpoints';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width <= SCREEN_SM,
    isScreenLg: width <= SCREEN_LG && width > SCREEN_SM,
  };
};
