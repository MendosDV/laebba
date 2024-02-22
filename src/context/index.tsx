'use client';

import React,{ createContext, useState, useEffect, useContext } from 'react'

const SizeScreenContext = createContext({
  isMobile: false
});

export interface SizeScreenProviderProps {
  children: React.ReactNode;
}

export default function SizeScreenProvider({ children }: SizeScreenProviderProps) {
  const [isMobile, setIsMobile] = useState(true);

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
    <SizeScreenContext.Provider value={{ isMobile }}>
      {children}
    </SizeScreenContext.Provider>
  )
}

export function useSizeScreen() {
  return useContext(SizeScreenContext);
}
