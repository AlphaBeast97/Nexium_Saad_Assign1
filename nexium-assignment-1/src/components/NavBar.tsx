import Link from "next/link";

export function NavBar() {
  return (
    <nav className="w-full bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg px-8 py-4 flex items-center justify-between">
      <Link
        className="text-2xl font-extrabold text-blue-700 tracking-tight"
        href="/"
      >
        QuoteNation
      </Link>
      <ul className="flex space-x-6"> 
        <li>
          <Link
            className="text-lg font-medium text-blue-800 hover:text-blue-600 transition-colors duration-200"
            href="/about"
          >
            About
          </Link>
        </li>
       </ul>
    </nav>
  );
}
