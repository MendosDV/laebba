'use client';

import Logo from '@/components/Navbar/Logo';
import { useState, useEffect } from 'react';


export default function NavMobile() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('jemma');
  };

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
    <div>
      <div className={`sticky top-0 border-transparent border-b mb-4 p-4 bg-primary flex justify-between items-center flex-row-reverse ${scrollPosition > 0 ? 'shadow-lg' : ''}`}>
        <button onClick={toggleMenu}>
          <Logo/>
        </button>
        <h2 className="font-extrabold text-3xl">
          Laebba
        </h2>
      </div>

      { isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-primary z-50 p-4">
          <div className='sticky top-0 mb-4 flex justify-between items-center flex-row-reverse'>
            <button onClick={toggleMenu}>
              x
            </button>
            <h2 className="font-extrabold text-3xl">
              Laebba
            </h2>
          </div>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
