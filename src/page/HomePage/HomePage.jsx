import { useEffect, useState } from "react";
import "../HomePage/HomePage.css";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";



export default function HomePage() {
  const [movies, setMovies] = useState(null)

  async function getMovie() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=ac7e5c509c05c95a09ccc13bb434f9f4`)
    const data = await response.json()
    setMovies(data.results)

  }
  useEffect(() => { getMovie() }, [])

  return <>
    { movies === null ? (
      <Loading />
    ) : (<section className="container py-7 pt-25 mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie) => ( <MovieCard movieDetails={movie} key={movie.id} /> ))}
      </div>
    </section>)}
</>
  
}
