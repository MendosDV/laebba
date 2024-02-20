import Logo from '@/components/Navbar/Logo';

export default function Navbar() {
  return (
    <div className="sticky top-0 border-transparent border-b shadow-lg mb-4 p-4 bg-primary flex justify-between items-center flex-row-reverse">
      <Logo />
      <h2 className="font-extrabold text-3xl">
        Laebba
      </h2>
    </div>
  );
}
