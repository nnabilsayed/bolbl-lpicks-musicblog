"use client";

import React from "react";
import GenreCard from "./GenreCard";

export const genres = [
  { id: 1, name: "Rock", image: "/images/rock.jpg" },
  { id: 2, name: "Pop", image: "/images/pop.jpeg" },
  { id: 3, name: "Hip-Hop", image: "/images/hiphop.jpg" },
  { id: 4, name: "R&B", image: "/images/R&B.WEBP" },
  { id: 5, name: "Alternative Rock", image: "/images/altrock.webp" },
  { id: 6, name: "Progressive Rock", image: "/images/progrock.jpg" },
];

const GenreList = () => {
  return (
    <div className="container mx-auto px-36 py-8">
      <h2 className="text-3xl font-bold mb-6">Music Genres</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {genres.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default GenreList;
