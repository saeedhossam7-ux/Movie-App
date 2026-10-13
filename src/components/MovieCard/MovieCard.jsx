import React from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function MovieCard({ movieDetails }) {
  return (
    <div className="group">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-red-600/50 transition-all duration-300 flex flex-col h-full">
        {/* Card Image Container */}
        <div className="relative aspect-[2/3] overflow-hidden bg-gray-950">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Rating Badge */}
          <div className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-md border border-gray-800 text-yellow-400 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
            <i className="fa-solid fa-star mr-1.5 text-xs"></i>
            <span>{movieDetails.vote_average.toFixed(1)}</span>
          </div>

          {/* Media Type Badge */}
          <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-md border border-gray-800 text-gray-300 px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider flex items-center shadow-lg">
            <i className="fa-solid fa-film mr-1.5 text-xs text-red-500"></i>
            {movieDetails.media_type}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0  bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-4">
            <div className="w-full flex flex-col items-center space-y-3">
              <button className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110" aria-label="Play trailer">
                <i className="fa-solid fa-play ml-0.5"></i>
              </button>
              <div className="flex items-center space-x-2">
                <button
                  className="w-10 h-10 bg-gray-900/80 hover:bg-red-600 text-gray-200 hover:text-white border border-gray-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Add to favorites"
                >
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button
                  className="w-10 h-10 bg-gray-900/80 hover:bg-red-600 text-gray-200 hover:text-white border border-gray-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Add to watchlist"
                >
                  <i className="fa-regular fa-bookmark"></i>
                </button>
                <Link 
                  to={`/movie/${movieDetails.id}`} 
                  className="w-10 h-10 bg-gray-900/80 hover:bg-red-600 text-gray-200 hover:text-white border border-gray-700 rounded-full flex items-center justify-center transition-colors" 
                  aria-label="More info"
                >
                  <i className="fa-solid fa-info"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col flex-grow bg-gray-900">
          <h5 className="text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-red-500 transition-colors">
            {movieDetails.title}
          </h5>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
            <span className="flex items-center">
              <i className="fa-regular fa-calendar mr-1.5 text-red-500"></i>
              {new Date(movieDetails.release_date).getFullYear()}
            </span>
            <span className="flex items-center uppercase bg-gray-800 px-2 py-0.5 rounded text-gray-300 font-medium">
              <i className="fa-solid fa-globe mr-1.5 text-red-500"></i>
              {movieDetails.original_language}
            </span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mt-auto">
            {movieDetails.overview}
          </p>
        </div>

      </div>
    </div>
  );
}