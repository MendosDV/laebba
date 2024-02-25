import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center bg-amber-400 h-screen">
      <h1>Error 404</h1>
      <p>Page not found</p>
      <Link href="/" >Back to Home</Link>
    </div>
  );
}
