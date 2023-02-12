import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { useState, useEffect, useRef } from "react";
import { Movies } from "./components/Movies";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se han ingresado peliculas");
      return;
    }
    if (search.length < 3) {
      setError("Debe ingresar al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Movies search App</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            // ref={inputRef}
            onChange={handleChange}
            value={search}
            name="search"
            type="text"
            placeholder="The Matrix, Alien, Armageddon..."
          />
          <button type="submit">Search</button>
        </form>
        <p className="error">{error}</p>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
