import Logo from '@/components/Navbar/Logo';

export default function Navbar() {
  return (
    <nav className="p-10 flex justify-between items-center flex-row-reverse top-0 ">
      <Logo />
      <h2 className="font-extrabold text-3xl">
        Mabbeal
      </h2>
    </nav>
  );
}
