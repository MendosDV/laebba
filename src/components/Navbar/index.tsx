'use client';

import { useSizeScreen } from '@/context';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

export default function Navbar() {
  const { isMobile } = useSizeScreen();

  return (
    <div>
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </div>
  );
};
