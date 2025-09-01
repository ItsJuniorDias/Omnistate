import React from "react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <React.Fragment>
      <section className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6">
        <h1 className="text-6xl font-semibold tracking-tight text-gray-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-medium text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-lg max-w-md mb-8">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <a
          href="/"
          className="px-6 py-3 rounded-full bg-black text-white text-lg font-medium 
               hover:bg-gray-900 transition-colors shadow-md"
        >
          Go Home
        </a>
      </section>
    </React.Fragment>
  );
};

export default NotFound;
