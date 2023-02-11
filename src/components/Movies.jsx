function ListOfMovies({ movies }) {
  return (
    <ul className="list-movies">
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.poster} alt={movie.title} />
          <p>Year: {movie.year}</p>
        </li>
      ))}
    </ul>
  );
}

function NotMoviesResults() {
  return <p>Not results found</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NotMoviesResults />;
}
