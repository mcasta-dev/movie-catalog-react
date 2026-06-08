import { useEffect, useState } from "react";
import { MoviesCard } from "../components/MoviesCard";
import { getPopularMovies, searchMovies } from "../services/api";
import "../styles/Home.css";

export function Home() {
  const [searchQuery, setSearchQUery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim().length === 0) {
      return alert("Campo inválido");
    }
    if (loading) {
      return;
    }

    setLoading(true);
    
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.log(error, error.message);
      setError("Falha ao encontrar filme");
    } finally {
      setLoading(false);
    }

    setSearchQUery("");
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSearch} className="search-form" id="search-form">
        <input
          type="text"
          placeholder="Procurar filmes..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchQUery(e.target.value.toLocaleLowerCase());
          }}
        />
        <button type="submit" className="search-btn">
          Procurar
        </button>
      </form>

      {loading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MoviesCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
