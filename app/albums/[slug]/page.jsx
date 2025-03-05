"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { albums } from "@/app/lib/albums";
import Link from "next/link";
import Header from "@/app/components/Header";
import AddComment from "@/app/components/AddComment";
import { FaSpotify } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { useContext } from "react";
import { AlbumContext } from "@/app/context/AlbumProvider";
import { Heart } from "lucide-react";

export default function AlbumPage({ params }) {
  const { removeAlbumFromList, addAlbum, addedAlbumList } =
    useContext(AlbumContext);
  const resolvedParams = React.use(params); // Unwrap params
  const album = albums.find((a) => a.slug === resolvedParams.slug);
  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none" />

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-purple-500 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Albums
          </Link>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Album Cover */}
            <div className="relative">
              <div className="aspect-square bg-gray-900/50 backdrop-blur-sm rounded-lg p-2">
                <div className="relative w-full h-full">
                  <Image
                    src={album.image}
                    alt={album.title}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-2xl shadow-purple-500/10"
                  />

                  <div className="flex gap-2 mt-3">
                    {album.link && (
                      <Link href={album.link}>
                        <FaSpotify className="text-purple-100 text-2xl" />
                      </Link>
                    )}
                    {album.youtube && (
                      <Link href={album.youtube}>
                        <TfiYoutube className="text-purple-100 text-2xl" />
                      </Link>
                    )}
                  </div>
                  <button
                    onClick={() => addAlbum(album)}
                    className={`mt-3 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      addedAlbumList.some((fav) => fav.slug === album.slug)
                        ? "bg-pink-500 text-white"
                        : "bg-white/10 hover:bg-pink-500/20 text-white"
                    }`}
                    title="Add to favorites"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        addedAlbumList.some((fav) => fav.slug === album.slug)
                          ? "fill-current"
                          : ""
                      }`}
                    />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-white">
                      {album.score}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Album Details */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h1 className="text-5xl font-bold mb-3">
                  <span className="">{album.title}</span>
                </h1>
                <h2 className="text-2xl text-gray-400">{album.artist}</h2>
              </div>

              {/* Album Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Release Date", value: album.releaseDate },
                  { label: "Genre", value: album.genre },
                  { label: "Length", value: album.length },
                  { label: "Score", value: album.score },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors"
                  >
                    <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Review Section */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                <h3 className="text-2xl font-semibold mb-4">Review</h3>
                <p className="text-gray-300 leading-relaxed">{album.review}</p>
              </div>

              {/* Standout Tracks */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                <h3 className="text-2xl font-semibold mb-4">Standout Tracks</h3>
                <div className="flex flex-wrap gap-3">
                  {album.standoutTracks.map((track) => (
                    <span
                      key={track}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 rounded-full text-sm font-medium hover:border-purple-500/40 transition-colors"
                    >
                      {track}
                    </span>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                  <h3 className="text-2xl font-semibold mb-6">
                    Comments ({album.comments.length})
                  </h3>

                  {/* Add Comment Form */}
                  <AddComment />

                  {/* Existing Comments List */}
                  <div className="space-y-6">
                    {album.comments.map((comment, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                      >
                        {/* User Avatar */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                          {comment.name.charAt(0)}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-purple-400">
                              {comment.name}
                            </h4>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-400">
                                {comment.date}
                              </span>
                              <div className="px-2 py-1 bg-purple-500/10 rounded-full border border-purple-500/20">
                                <span className="text-sm font-medium text-purple-400">
                                  {comment.score}/10
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
