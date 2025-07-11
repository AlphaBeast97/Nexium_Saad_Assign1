import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-blue-900 p-6 sm:p-10">
      {/* Container for the content */}
      <div className="text-center bg-white/80 shadow-2xl rounded-xl p-8 sm:p-14 max-w-2xl w-full border border-blue-200 backdrop-blur-md">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-blue-700 mb-4 drop-shadow">
          404
        </h1>
        <p className="text-3xl sm:text-4xl font-semibold text-blue-900 mb-4">
          Page Not Found
        </p>
        <p className="text-lg sm:text-xl text-blue-900 mb-8 font-medium">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition-colors duration-200 border border-blue-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Go to Home
        </Link>
      </div>

      <footer className="mt-12 text-blue-200 text-sm">
        &copy; {new Date().getFullYear()} QuoteNation. All rights reserved.
      </footer>
    </div>
  );
}
