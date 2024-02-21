import Logo from '@/components/Navbar/Logo';
import Links from '@/components/Navbar/Links';
import Langage from '@/components/Navbar/Langage';
import Title from '@/components/Navbar/Title';

export default function NavbarDesktop() {
  return (
    <nav className="m-10 flex justify-between items-center flex-row-reverse top-0">
      <div className='flex gap-10 justify-center items-center'>
        <Langage />
        <Logo />
      </div>
      <Links />
      <Title />
    </nav>
  );
}
