import { data, useParams } from 'react-router'
import '../MovieDetails/MovieDetails.css'
import { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import { faArrowRight, faArrowUp, faBuilding, faCalendar, faCircleCheck, faCircleInfo, faClock, faGlobe, faLink, faLocationDot, faPlay, faQuoteLeft, faShareNodes, faSquarePollVertical,faStar,faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome, faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons/faBookmark'
export default function MovieDetails() {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [trailerKey, setTrailerKey] = useState(null);
  const [isWishlist, setIsWishlist] = useState(() => {
    const saved = localStorage.getItem(`movie_wishlist_${String(id)}`);
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem(`movie_wishlist_${id}`, JSON.stringify(isWishlist));
  }, [isWishlist, id]);
  async function getMovieDetails() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ac7e5c509c05c95a09ccc13bb434f9f4`)
    const data = await response.json()
    setMovieDetails(data)
  }
  async function trailerVideo() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ac7e5c509c05c95a09ccc13bb434f9f4`)
    const data = await response.json()
    setTrailerKey(data.results);

  }
  const trailer = trailerKey?.find(
  (video) => video.site === "YouTube" && video.type === "Trailer"
);


  useEffect(() => { getMovieDetails(), trailerVideo() }, [])
  return (
    <>
      {movieDetails === null ? <Loading /> :
        <main className="min-h-screen bg-gray-950 text-white pt-16">
          {/* Hero Section with Backdrop */}
          <section className="relative min-h-[70vh] flex items-center overflow-hidden py-12">
            <div className="absolute inset-0 z-0">
              <img
                src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                alt="Movie Backdrop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">

                {/* Poster */}
                <div className="w-full lg:w-1/3 flex justify-center">
                  <div className="relative w-72 lg:w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                      alt="Movie Poster"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-md border border-gray-800 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
                      <FontAwesomeIcon icon={faStar} className='mr-1 text-yellow-400' />
                      <span>{movieDetails.vote_average.toFixed(1)}</span>
                    </div>
                  </div>
                </div>

                {/* Movie Info */}
                <div className="w-full lg:w-2/3 flex flex-col space-y-4">
                  <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white">
                    {movieDetails.title}
                  </h1>

                  {movieDetails.tagline && (
                    <p className="text-gray-400 italic text-base flex items-center">
                      <FontAwesomeIcon icon={faQuoteLeft} className='mr-1 text-gray-400' />
                      {movieDetails.tagline}
                    </p>
                  )}

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300">
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faCalendar} className='mr-1 text-gray-400' />
                      {movieDetails.release_date ? new Date(movieDetails.release_date).getFullYear() : 'N/A'}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faClock} className='mr-1 text-gray-400' />
                      {movieDetails.runtime} min
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="flex items-center uppercase">
                      <FontAwesomeIcon icon={faGlobe} className='mr-1 text-gray-400' />
                      {movieDetails.original_language}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="flex items-center bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-0.5 rounded-full font-medium">
                      <FontAwesomeIcon icon={faCircleCheck} className='mr-1 text-green-400' />
                      {movieDetails.status}
                    </span>
                  </div>

                  {/* Genres */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {movieDetails.genres?.map((genre) => (
                      <span key={genre.id} className="bg-gray-900 border border-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                        {genre.name}
                      </span>
                    ))}
                  </div>

                  {/* Rating & Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
                    <div className="flex items-center space-x-3 bg-gray-900/60 border border-gray-800/80 p-3 rounded-xl">
                      <div className="text-yellow-400 text-xl font-bold flex items-center">
                        <FontAwesomeIcon icon={faStar} className='mr-1 text-yellow-400' />
                        <span>{movieDetails.vote_average?.toFixed(1)}</span>
                        <span className="ml-2 text-lg text-gray-400">User Score</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 bg-gray-900/60 border border-gray-800/80 p-3 rounded-xl">
                      <div className="flex items-center text-xl font-bold ">
                        <FontAwesomeIcon icon={faSquarePollVertical} className='mr-1 text-green-400' />
                        <span className=" text-lg text-gray-400">{movieDetails.vote_count} Votes</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 bg-gray-900/60 border border-gray-800/80 p-3 rounded-xl">
                      <div className="text-red-500 text-xl">
                        <FontAwesomeIcon icon={faArrowUp} className='mr-1 text-red-400' />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-400">Popularity</span>
                        <span className="text-sm font-semibold text-white">{movieDetails.popularity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {trailer && <a href={`https://www.youtube.com/watch?v=${trailer.key}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-medium flex items-center justify-center shadow-lg transition-colors">
                      <FontAwesomeIcon icon={faPlay} className='mr-1 text-white text-sm' />
                      Watch Trailer
                    </a>}
                    <button
                    onClick={()=>{setIsWishlist(!isWishlist)}}
                    className="bg-gray-900 cursor-pointer hover:bg-gray-800 text-gray-200 border border-gray-700 px-4 py-2.5 rounded-xl font-medium flex items-center transition-colors">
                      <FontAwesomeIcon icon={isWishlist ? faHeartSolid : faHeartRegular} className={`${isWishlist? 'text-red-500' : 'text-gray-500'} mr-1 mt-1`} />
                      Favorites
                    </button>
                    <button className="w-11 h-11 bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 rounded-xl flex items-center justify-center transition-colors" aria-label="Add to watchlist">
                      <FontAwesomeIcon icon={faBookmark} className='mr-1 text-gray-400' />
                    </button>
                    <button className="w-11 h-11 bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 rounded-xl flex items-center justify-center transition-colors" aria-label="Share">
                      <FontAwesomeIcon icon={faShareNodes} className='mr-1 text-gray-400' />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Details Section */}
          <section className="py-12 bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column - Overview & Details (col-span-2) */}
                <div className="lg:col-span-2 space-y-6">

                  {/* Overview Card */}
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                      <FontAwesomeIcon icon={faFontAwesome} className='mr-1 text-gray-400' />
                      Overview
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{movieDetails.overview}</p>
                  </div>

                  {/* Movie Details Grid Card */}
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <FontAwesomeIcon icon={faCircleInfo} className='mr-1 text-red-400' />
                      Movie Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex flex-col bg-gray-950/50 p-3 rounded-xl border border-gray-800/60">
                        <span className="text-gray-400 text-xs">Original Title</span>
                        <span className="font-semibold text-white mt-1">{movieDetails.original_title}</span>
                      </div>
                      <div className="flex flex-col bg-gray-950/50 p-3 rounded-xl border border-gray-800/60">
                        <span className="text-gray-400 text-xs">Release Date</span>
                        <span className="font-semibold text-white mt-1">{movieDetails.release_date}</span>
                      </div>
                      <div className="flex flex-col bg-gray-950/50 p-3 rounded-xl border border-gray-800/60">
                        <span className="text-gray-400 text-xs">Runtime</span>
                        <span className="font-semibold text-white mt-1">{movieDetails.runtime} minutes</span>
                      </div>
                      <div className="flex flex-col bg-gray-950/50 p-3 rounded-xl border border-gray-800/60">
                        <span className="text-gray-400 text-xs">Status</span>
                        <span className="font-semibold text-green-400 mt-1">{movieDetails.status}</span>
                      </div>
                      <div className="flex flex-col bg-gray-950/50 p-3 rounded-xl border border-gray-800/60">
                        <span className="text-gray-400 text-xs">Budget</span>
                        <span className="font-semibold text-white mt-1">${movieDetails.budget?.toLocaleString()}</span>
                      </div>
                      <div className="flex flex-col bg-gray-950/50 p-3 rounded-xl border border-gray-800/60">
                        <span className="text-gray-400 text-xs">Revenue</span>
                        <span className="font-semibold text-green-400 mt-1">${movieDetails.revenue?.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">

                  {/* Production Companies */}
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <FontAwesomeIcon icon={faBuilding} className='mr-1 text-red-400' />
                      Production
                    </h3>
                    <div className="space-y-4">
                      {movieDetails.production_companies?.map((company) => (
                        <div key={company.id} className="flex items-center space-x-3 bg-gray-950/50 p-3 rounded-xl border border-gray-800/60">
                          {company.logo_path && (
                            <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center shrink-0">
                              <img src={`https://image.tmdb.org/t/p/w200${company.logo_path}`} alt={company.name} className="max-h-full object-contain" />
                            </div>
                          )}
                          <div>
                            <h4 className="text-sm font-semibold text-white">{company.name}</h4>
                            <span className="text-xs text-gray-400 flex items-center mt-0.5">
                              <FontAwesomeIcon icon={faLocationDot} className='mr-1 text-red-400' />
                              {company.origin_country}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* External Links */}
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <FontAwesomeIcon icon={faLink} className='mr-1 text-red-400' />
                      External Links
                    </h3>
                    <div className="flex flex-col space-y-2">
                      {movieDetails.homepage && (
                        <a href={movieDetails.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-gray-950/50 hover:bg-gray-800/80 border border-gray-800/60 rounded-xl transition-colors text-sm text-gray-200">
                          <span className="flex items-center"><i className="fa-solid fa-globe mr-2 text-red-500"></i> Official Website</span>
                          <FontAwesomeIcon icon={faArrowRight} className='mr-1 text-red-400' />
                        </a>
                      )}
                      {movieDetails.imdb_id && (
                        <a href={`https://www.imdb.com/title/${movieDetails.imdb_id}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-gray-950/50 hover:bg-gray-800/80 border border-gray-800/60 rounded-xl transition-colors text-sm text-gray-200">
                          <span className="flex items-center"><i className="fa-solid fa-film mr-2 text-yellow-500"></i> IMDb Profile</span>
                          <FontAwesomeIcon icon={faArrowRight} className='mr-1 text-red-400' />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </section>
        </main>
      }
    </>
  )
}
