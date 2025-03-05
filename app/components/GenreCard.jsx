"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const GenreCard = ({ genre }) => {
  return (
    <Link href={`/singleGenre/${genre.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="relative h-48">
          <img
            src={genre.image}
            alt={`${genre.name} genre`}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            title={genre.name}
          >
            <h3 className="text-2xl font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {genre.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GenreCard;
