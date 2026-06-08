import { useMovieContext } from "../context/MovieContext";
import "../styles/MovieCard.css";

export function MoviesCard({ movie }) {
  const { isFavorite, addToFavorites, removeFavorite } = useMovieContext();

  const favorite = isFavorite(movie.id);

  function onFavoriteMovie(e) {
    e.preventDefault();
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-cards">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteMovie}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
