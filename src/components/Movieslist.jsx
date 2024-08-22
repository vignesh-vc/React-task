import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.post('https://hoblist.com/api/movieList', {
          category: 'movies',
          language: 'kannada',
          genre: 'all',
          sort: 'voting',
        });

        setMovies(response.data.movies); // Adjust according to the actual response structure
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="movies-page">
      <h1>Movies List</h1>
      <div className="movies-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Director:</strong> {movie.director}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
