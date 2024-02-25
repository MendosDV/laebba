'use client';

import Logo from '@/components/Navbar/Logo';
import Langage from '@/components/Navbar/Langage';
import Links from '@/components/Navbar/NavMobile/Links.tsx';
import Title from '@/components/Navbar/Title';
import { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion, animate } from 'framer-motion';
import SocialMobile from '@/components/SocialMedia/SocialMobile';

export default function NavMobile() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <nav className='fixed top-0 left-0 w-full'>
      <div className={`border-transparent border-b p-4 bg-primary flex justify-between items-center flex-row-reverse ${scrollPosition > 0 ? 'shadow-lg' : ''}`}>
        <button onClick={toggleMenu} aria-label='Ouvrir le menu'>
          <Logo />
        </button>
        <Title />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full h-full bg-primary p-4"
          >
            <div className='sticky top-0 flex justify-between items-center flex-row-reverse'>
              <button onClick={toggleMenu}
              className="font-extrabold" aria-label='Fermer le menu'>
                <IoClose style={{fontSize: '2.2rem'}}/>
              </button>
              <Title />
            </div>
            <Links toggleMenu={toggleMenu}/>
            <Langage />
            <SocialMobile />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
