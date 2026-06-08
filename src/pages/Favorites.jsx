import { MoviesCard } from "../components/MoviesCard";
import { useMovieContext } from "../context/MovieContext";
import "../styles/Favorites.css";

export function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length) {
    return (
      <div className="favorites-title">
        <h2>Seus Favoritos</h2>
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MoviesCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-movies">
      <h2 className="favorites-empty">Nenhum filme adicionado</h2>
    </div>
  );
}
