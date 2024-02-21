import Image from 'next/image';

export default function Logo() {
  return (
      <Image
        src="/logo.png"
        width={28}
        height={28}
        alt="Picture of the author"
      />
  );
}
