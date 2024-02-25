import Logo from '@/components/Navbar/Logo';
import Links from '@/components/Navbar/NavDesktop/Links';
import Langage from '@/components/Navbar/Langage';
import Title from '@/components/Navbar/Title';

export default function NavbarDesktop() {
  return (
    <nav className="pt-4 flex justify-between items-center flex-row-reverse">
      <div className='flex gap-7 justify-center items-center'>
        <Langage />
        <Logo />
      </div>
      <Links />
      <Title />
    </nav>
  );
}
