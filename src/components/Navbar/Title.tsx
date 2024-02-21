import Link from 'next/link';

export default function Title() {
  return (
    <Link href='/' aria-label='Accueil'>
      <h2 className="font-extrabold text-3xl">
      Mabbeal
      </h2>
    </Link>
  )
}
