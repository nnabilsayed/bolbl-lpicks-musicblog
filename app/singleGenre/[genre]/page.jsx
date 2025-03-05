"use client";

import React from "react";
import { genres } from "@/app/components/GenreList";
import { albums } from "@/app/lib/albums";
import AlbumCard from "@/app/components/AlbumCard";

const page = ({ params }) => {
  const { genre } = React.use(params);

  // Add null check and ensure genres is an array
  if (!Array.isArray(genres)) {
    return <div>Error loading genres</div>;
  }

  const genreData = genres.find((g) => g.id === parseInt(genre));

  if (!genreData) {
    return <div>Genre not found</div>;
  }

  // Filter albums by genre
  const filteredAlbums = albums.filter((album) =>
    album.genre.includes(genreData.name)
  );

  return (
    <div className="min-h-screen bg-black text-white pl-40">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-pink-500/5 rounded-full filter blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {genreData.name} Albums
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Explore our collection of {genreData.name} albums and discover your
            next favorite record.
          </p>
        </div>

        {filteredAlbums.length === 0 ? (
          <p className="text-gray-400">No albums found for this genre.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredAlbums.map((album) => (
              <AlbumCard
                key={album.slug}
                title={album.title}
                artist={album.artist}
                image={album.image}
                length={album.length}
                genre={album.genre}
                score={album.score}
                slug={album.slug}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
