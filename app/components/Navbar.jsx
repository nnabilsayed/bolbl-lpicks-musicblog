"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { AlbumContext } from "../context/AlbumProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { addedAlbumList } = useContext(AlbumContext);

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Bolbol Picks
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
            >
              Home
            </Link>

            <Link
              href="/news"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
            >
              News
            </Link>
            <Link
              href="/genres"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
            >
              Genres
            </Link>
            <Link
              className="relative px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:opacity-90 transition-opacity"
              href="/favorites"
            >
              Favorites
              {addedAlbumList.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-purple-500 text-xs rounded-full px-2 py-1">
                  {addedAlbumList.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              News
            </Link>
            <Link
              href="/genres"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              Genres
            </Link>
            <button className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white">
              Submit Review
            </button>
            <Link
              href="/favorites"
              className="block px-3 py-2 text-gray-300 hover:text-white relative"
            >
              Favorites
              {addedAlbumList.length > 0 && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-purple-500 text-xs rounded-full px-2 py-1">
                  {addedAlbumList.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
