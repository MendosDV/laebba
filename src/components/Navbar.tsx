import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="flex justify-end items-center border-transparent border-b shadow-md mb-4">
      <Image
        src="/logo.png"
        width={120}
        height={120}
        alt="Picture of the author"
      />
    </div>
  );
}
