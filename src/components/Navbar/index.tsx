'use client';

import { useSizeScreen } from '@/context';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

export default function Navbar() {
  const { isMobile } = useSizeScreen();

  return (
    <header className='fixed top-0 w-full h-10'>
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </header>
  );
};
