"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "88db5050daf3437f89ca1c351d6935a9"; // Hardcoded API key
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=music&from=2024-12-01&to=2024-12-31&sortBy=popularity&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.articles) {
          throw new Error("No articles found in the response.");
        }

        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none" />

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Latest Music News
            </span>
          </h1>

          {loading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden animate-pulse"
                >
                  <div className="w-full h-48 bg-gray-800/50" />
                  <div className="grid gap-4 p-6">
                    <div className="h-6 bg-gray-800/50 rounded mb-4 w-3/4" />
                    <div className="h-4 bg-gray-800/50 rounded mb-2 w-full" />
                    <div className="h-4 bg-gray-800/50 rounded mb-2 w-5/6" />
                    <div className="h-4 bg-gray-800/50 rounded w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {news?.map((article, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                >
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                    <p className="text-gray-400 mb-4">{article.description}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-400 transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
