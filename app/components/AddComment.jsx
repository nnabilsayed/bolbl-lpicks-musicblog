"use client";
import React, { useState } from "react";

const AddComment = () => {
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [commentsList, setCommentsList] = useState([]);
  const postComment = (e) => {
    e.preventDefault();
    setCommentsList([...commentsList, { text, score, name, date }]);
  };

  return (
    <div>
      <div className="mb-8">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="score"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Score
              </label>
              <select
                id="score"
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
                className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                {[...Array(11)].map((_, i) => (
                  <option key={i} value={i}>
                    {i}/10
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Comment
            </label>
            <textarea
              id="comment"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="3"
              className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
              placeholder="Share your thoughts about this album..."
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              onClick={postComment}
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity font-medium"
            >
              Post Comment
            </button>
          </div>
        </form>

        {/* Comments List */}
        <div id="comments" className="mt-12">
          <div>
            <div className="">
              <h3 className="text-2xl font-semibold mb-6">
                Comments ({commentsList.length})
              </h3>

              {/* Existing Comments List */}
              <div className="space-y-6">
                {commentsList.map((comment, index) => (
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
  );
};

export default AddComment;
