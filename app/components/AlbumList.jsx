"use client";
import React, { useState } from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "@/app/lib/albums";

const AlbumList = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [genreFilter, setGenreFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const ITEMS_PER_PAGE = 6;
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const showMoreItems = () => {
    setDisplayCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  // Filter albums based on selected genre and search query
  const filteredAlbums = albums
    .filter((album) => genreFilter === "all" || album.genre === genreFilter)
    .filter((album) =>
      album.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const hasMoreItems = displayCount < filteredAlbums.length;

  return (
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-pink-500/5 rounded-full filter blur-3xl -z-10" />

      {/* Updated flex container for search and filter */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
        {/* Search input */}
        <div className="relative sm:max-w-md">
          <input
            type="text"
            placeholder="Search albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-black w-full px-6 py-2 text-sm bg-white border-2 border-purple-100 rounded-full focus:outline-none focus:border-purple-500 transition-colors"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Genre filter button */}
        <div className="relative">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:opacity-90 transition-opacity"
          >
            {genreFilter === "all" ? "Filter by Genre" : genreFilter}
          </button>

          {showFilters && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
              <button
                key="all"
                onClick={() => {
                  setGenreFilter("all");
                  setShowFilters(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-purple-50 hover:text-purple-500 transition-colors ${
                  genreFilter === "all"
                    ? "text-purple-500 bg-purple-50"
                    : "text-gray-700"
                }`}
              >
                All Genres
              </button>
              {[...new Set(albums.map((album) => album.genre))].map((genre) => (
                <button
                  key={genre}
                  onClick={() => {
                    setGenreFilter(genre);
                    setShowFilters(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-purple-50 hover:text-purple-500 transition-colors ${
                    genreFilter === genre
                      ? "text-purple-500 bg-purple-50"
                      : "text-gray-700"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Show "No results found" message when there are no matches */}
      {filteredAlbums.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No albums found matching your search criteria.
        </div>
      )}

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAlbums.slice(0, displayCount).map((album) => (
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
          </div>
        ))}
      </div>

      {/* Load more button */}
      {hasMoreItems && (
        <div className="mt-16 text-center">
          <button
            onClick={showMoreItems}
            className="px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:opacity-90 transition-opacity uppercase tracking-wider"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default AlbumList;
