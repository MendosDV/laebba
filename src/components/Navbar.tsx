'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 border-transparent border-b shadow-lg mb-4 p-4 bg-primary flex justify-between items-center flex-row-reverse">
      <Image
        src="/logo.png"
        width={28}
        height={28}
        alt="Picture of the author"
      />
      {scrollPosition > 0 && (
        <h2 className="font-extrabold text-3xl">
          Laebba
        </h2>
      )}
    </div>
  );
}
