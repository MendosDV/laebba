import Link from 'next/link';
import { useSizeScreen } from '@/context';
import { motion } from 'framer-motion';

export default function Links({
  toggleMenu
}
: {
  toggleMenu: () => void
})
{
  const { isMobile } = useSizeScreen();

  return (
     (isMobile ? (
        <motion.ul
          className="h-4/5 flex flex-col lg:flex-row gap-5 lg:gap-14 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Link
            href='/'
            className='text-2xl font-bold lg:text-base lg:font-semibold'
            onClick={toggleMenu}
          >
            À propos
          </Link>
          <Link
            href='/cv'
            className='text-2xl font-bold lg:text-base lg:font-semibold'
            onClick={toggleMenu}
          >
            CV
          </Link>
          <Link
            href='/projets'
            className='text-2xl font-bold lg:text-base lg:font-semibold'
            onClick={toggleMenu}
          >
            Projets
          </Link>
          <Link
            href='/contact'
            className='text-2xl font-bold lg:text-base lg:font-semibold'
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </motion.ul>
      )
      : (
        <ul
          className="h-4/5 flex flex-col lg:flex-row gap-5 lg:gap-14 justify-center items-center"
        >
          <Link href='/' className='text-2xl font-bold lg:text-base lg:font-semibold'>À propos</Link>
          <Link href='/cv' className='text-2xl font-bold lg:text-base lg:font-semibold'>CV</Link>
          <Link href='/projets' className='text-2xl font-bold lg:text-base lg:font-semibold'>Projets</Link>
          <Link href='/contact' className='text-2xl font-bold lg:text-base lg:font-semibold'>Contact</Link>
        </ul>
      )
    )
  )
}
