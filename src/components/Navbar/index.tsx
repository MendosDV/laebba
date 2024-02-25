'use client';

import { useSizeScreen } from '@/context';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

export default function Navbar() {
  const { isMobile } = useSizeScreen();

  return (
    <header className='fixed top-0 px-10 w-full'>
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </header>
  );
};
