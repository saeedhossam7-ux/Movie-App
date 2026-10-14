import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faGlobe, faInfo, faPlay, faStar,faHeart as faHeartSolid   } from '@fortawesome/free-solid-svg-icons';
import {faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faBookmark, faCalendar  } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';


export default function MovieCard({ movieDetails }) {
  const [trailerKey, setTrailerKey] = useState(null);
  const [whishList, setWhishList] = useState(() => {
  const savedState = localStorage.getItem(`wishlist_${movieDetails.id}`); 
  return savedState ? JSON.parse(savedState) : false;
});
useEffect(() => {
  localStorage.setItem(`wishlist_${movieDetails.id}`, JSON.stringify(whishList));
}, [whishList, movieDetails.id]);
    async function trailerVideo() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieDetails.id}/videos?api_key=ac7e5c509c05c95a09ccc13bb434f9f4`)
    const data = await response.json()
    setTrailerKey(data.results);

  }
  const trailer = trailerKey?.find(
  (video) => video.site === "YouTube" && video.type === "Trailer"
);
useEffect(() => {trailerVideo() }, [])
  return (
    <div className="group px-5">
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
            <FontAwesomeIcon icon={faStar} className='mr-1 text-yellow-400' />
            <span>{movieDetails.vote_average.toFixed(1)}</span>
          </div>

          {/* Media Type Badge */}
          <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-md border border-gray-800 text-gray-300 px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider flex items-center shadow-lg">
            <FontAwesomeIcon icon={faFilm} className='mr-1 text-red-400' />
            {movieDetails.media_type}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0  bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-4">
            <div className="w-full flex flex-col items-center space-y-3">
{trailer &&               <a href={`https://www.youtube.com/watch?v=${trailer.key}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 cursor-pointer bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110" aria-label="Play trailer">
                <FontAwesomeIcon icon={faPlay} className='text-white text-xl' />
              </a>}
              <div className="flex items-center space-x-2">
                <button
                onClick={()=>{setWhishList(!whishList)}}
                  className="w-10 h-10 cursor-pointer bg-gray-900/80 hover:bg-red-600 text-gray-200 hover:text-white border border-gray-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Add to favorites"
                >
                  <FontAwesomeIcon icon={whishList ? faHeartSolid : faHeartRegular} className={`${whishList? 'text-red-500' : 'text-gray-500'}`} />
                </button>
                <button
                  className="w-10 h-10 bg-gray-900/80 hover:bg-red-600 text-gray-200 hover:text-white border border-gray-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Add to watchlist"
                >
                  <FontAwesomeIcon icon={faBookmark} className='text-gray-400' />
                </button>
                <Link 
                  to={`/movie/${movieDetails.id}`} 
                  className="w-10 h-10 bg-gray-900/80 hover:bg-red-600 text-gray-200 hover:text-white border border-gray-700 rounded-full flex items-center justify-center transition-colors" 
                  aria-label="More info"
                >
                  <FontAwesomeIcon icon={faInfo} className='text-gray-400' />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col flex-grow bg-gray-900">
          <h5 className="text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-red-500 transition-colors">
            <Link to={`/movie/${movieDetails.id}`} className='cursor-pointer'>{movieDetails.title}</Link>
          </h5>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faCalendar} className='mr-1 text-gray-400' />
              {new Date(movieDetails.release_date).getFullYear()}
            </span>
            <span className="flex items-center uppercase bg-gray-800 px-2 py-0.5 rounded text-gray-300 font-medium">
              <FontAwesomeIcon icon={faGlobe} className='mr-1 text-gray-400' />
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