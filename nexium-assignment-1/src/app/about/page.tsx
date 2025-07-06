import Link from "next/link";

export const metadata = {
  title: "About QuoteNation",
  description: "Learn more about QuoteNation and its creator.",
};

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-blue-900 p-6 sm:p-10">
      <div className="text-center bg-white/80 shadow-2xl rounded-xl p-8 sm:p-14 max-w-2xl w-full border border-blue-200 backdrop-blur-md">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4 drop-shadow">
          About QuoteNation
        </h1>
        <p className="text-lg sm:text-xl text-blue-900 mb-4 font-medium">
          QuoteNation is a simple site for discovering and enjoying great
          quotes.
        </p>
        <p className="text-md sm:text-lg text-blue-800 mb-8 font-normal">
          Developed by{" "}
          <a
            href="https://github.com/AlphaBeast97"
            className="underline font-semibold hover:text-blue-900 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            M. Saad Khan
          </a>
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
    </div>
  );
}
