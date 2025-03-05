"use client";

import React from "react";
import { useContext } from "react";
import { AlbumContext } from "@/app/context/AlbumProvider";
import AlbumCard from "@/app/components/AlbumCard";
import Header from "@/app/components/Header";
import { FaTrash } from "react-icons/fa";

const FavoritesPage = () => {
  const { addedAlbumList, removeAlbumFromList } = useContext(AlbumContext);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none" />

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Your Favorite Albums
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              A collection of your most cherished albums. Click on any album to
              view more details.
            </p>
          </div>

          {addedAlbumList.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">
                You haven't added any albums to your favorites yet.
              </p>
              <p className="text-gray-500">
                Browse our collection and add some albums you love!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {addedAlbumList.map((album) => (
                <div
                  key={album.slug}
                  className="relative group cursor-pointer overflow-hidden rounded-lg transition-all duration-300"
                  title={album.title}
                >
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium text-lg mb-2">
                        {album.title}
                      </p>
                      <p className="text-gray-200 text-sm">{album.artist}</p>
                    </div>
                  </div>
                  <AlbumCard {...album} />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeAlbumFromList(album.slug);
                    }}
                    className="absolute top-2 left-2 p-2 bg-red-500/80 hover:bg-red-500 rounded-full transition-colors z-10"
                    title="Remove from favorites"
                  >
                    <FaTrash className="text-white text-sm" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FavoritesPage;
