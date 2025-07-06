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
        
          
    </nav>
  );
}
