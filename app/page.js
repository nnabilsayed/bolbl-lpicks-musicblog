import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AlbumList from "./components/AlbumList";
import MusicboardFeatures from "./components/MusicboardFeatures";
const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Latest Reviews
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Explore our latest album reviews and discover your next favorite
              record.
            </p>
          </div>
          <div className="mb-12 max-h-[32rem]"></div>

          <AlbumList />
        </div>
      </main>
    </div>
  );
};

export default Page;
