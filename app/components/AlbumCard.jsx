import Link from "next/link";
import React from "react";
const AlbumCard = ({ title, artist, image, length, genre, score, slug }) => {
  return (
    <div className="group bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-800">
      <div className="relative aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 "
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Score Badge */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-white">{score}</span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-white text-sm uppercase tracking-wider font-medium">
              View Full Review
            </span>
          </div>
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            <Link href={`/albums/${slug}`}>
              <button className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-white truncate">{title}</h2>
        <p className="text-gray-400 font-medium">{artist}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
            </svg>
            <span>{length}</span>
          </div>
          <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
            {genre}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
