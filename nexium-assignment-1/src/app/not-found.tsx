export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-6 sm:p-10">
      {/* Container for the content */}
      <div className="text-center bg-white shadow-xl rounded-lg p-8 sm:p-12 max-w-lg w-full">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-blue-600 mb-4">
          404
        </h1>
        <p className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </p>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* The "Go to Homepage" Link/button has been removed from here */}
      </div>

      {/* Optional: Footer or attribution */}
      <footer className="mt-12 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}
