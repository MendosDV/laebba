'use client';

import Logo from '@/components/Navbar/Logo';
import Langage from '@/components/Navbar/Langage';
import { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

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
          <Logo />
        </button>
        <h2 className="font-extrabold text-3xl">
          Laebba
        </h2>
      </div>

      { isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-primary z-50 p-4 overflow-hidden">
          <div className='sticky top-0 mb-4 flex justify-between items-center flex-row-reverse'>
            <button onClick={toggleMenu} className='font-extrabold'>
              <IoClose style={{fontSize: '2.8rem'}}/>
            </button>
            <h2 className="font-extrabold text-3xl">
              Laebba
            </h2>
          </div>
          <ul className="h-5/6 flex flex-col gap-4 justify-center items-center">
            <li className="text-2xl font-bold"><a href="#">Accueil</a></li>
            <li className='text-2xl font-bold'><a href="#">CV</a></li>
            <li className='text-2xl font-bold'><a href="#">Projets</a></li>
            <li className='text-2xl font-bold'><a href="#">Contact</a></li>
          </ul>
          <Langage />
          <div className='flex justify-center items-center gap-3'>
            <TiSocialLinkedin style={{fontSize: '2rem'}}/>
            <FaGithub style={{fontSize: '2rem'}}/>
          </div>
        </div>
      )}
    </div>
  );
}
