import Link from 'next/link';

export default function Links() {
  return (
    <ul
      className="h-4/5 flex flex-col lg:flex-row gap-5 lg:gap-14 justify-center items-center"
    >
      <Link href='/' className='text-2xl font-bold lg:text-base lg:font-semibold'>À propos</Link>
      <Link href='/cv' className='text-2xl font-bold lg:text-base lg:font-semibold'>CV</Link>
      <Link href='/projets' className='text-2xl font-bold lg:text-base lg:font-semibold'>Projets</Link>
      <Link href='/contact' className='text-2xl font-bold lg:text-base lg:font-semibold'>Contact</Link>
    </ul>
  )
}
