'use client';

import React, { useEffect, useState } from 'react';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </div>
  );
};
