import Link from 'next/link';

export default function Links() {
  return (
    <ul
      className="h-4/5 flex flex-col gap-5 justify-center items-center"
    >
      <Link href='/' className='text-2xl font-bold'>Accueil</Link>
      <Link href='/cv' className='text-2xl font-bold'>CV</Link>
      <Link href='/projets' className='text-2xl font-bold'>Projets</Link>
      <Link href='/contact' className='text-2xl font-bold'>Contact</Link>
    </ul>
  )
}
