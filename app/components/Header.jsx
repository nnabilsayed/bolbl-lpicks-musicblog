"use client";

import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { AlbumContext } from "@/app/context/AlbumProvider";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  const { addedAlbumList } = useContext(AlbumContext);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-purple-500 transition-colors"
          >
            Album Reviews
          </Link>
          <Link href={"/favorite"}>fav</Link>
          <Link
            href="/favorites"
            className="flex items-center space-x-2 text-white hover:text-purple-500 transition-colors"
          >
            <FaHeart className="text-xl" />
            <span className="hidden sm:inline">Favorites</span>
            {addedAlbumList.length > 0 && (
              <span className="bg-purple-500 text-white text-xs rounded-full px-2 py-1">
                {addedAlbumList.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
