import {useLayoutEffect, useState } from 'react';

function useWindowWidth(delay = 700) {
  const [width, setWidth] = useState(window.innerWidth-16);

  useLayoutEffect(() => {
    const handleResize = () => setWidth(window.innerWidth-16);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [delay]);

  return width;
}

export default useWindowWidth;