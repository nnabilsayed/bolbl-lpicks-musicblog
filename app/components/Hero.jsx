import React from "react";
import Link from "next/link";

const Hero = ({ title, subtitle, showButtons = true }) => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/80 z-10 animate-gradient" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 h-[600px] sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl animate-fade-in">
          <span className="text-purple-400 text-sm uppercase tracking-wider font-medium mb-8 block hover:text-purple-300 transition-colors">
            Your Daily Dose of Music Reviews
          </span>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8">
            {title || (
              <>
                Where Music Meets
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                  {" "}
                  Perspective
                </span>
              </>
            )}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            {subtitle ||
              "Deep dive into album reviews, artist stories, and sonic journeys. Experience music through fresh ears and expert analysis."}
          </p>
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/"
                className="group px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 uppercase tracking-wider"
              >
                Explore Albums
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                  →
                </span>
              </Link>
              <Link
                href="/genres"
                className="group px-8 py-4 text-sm font-medium text-white border border-purple-500/50 rounded-md transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400 hover:scale-105 uppercase tracking-wider"
              >
                Explore Genres
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                  →
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-[30rem] h-[30rem] bg-pink-500/10 rounded-full filter blur-3xl animate-pulse-slower" />
      <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" />
    </div>
  );
};

export default Hero;
