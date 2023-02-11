import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { useState, useEffect } from "react";
import { Movies } from "./components/Movies";
//import { useRef } from "react";

function App() {
  const { movies } = useMovies();
  //const inputRef = useRef();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const { query } = Object.fromEntries(new window.FormData(event.target));
    console.log({ query });

    // const inputEl = inputRef.current;
    // const value = inputEl.value;
    // console.log(value);
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query === "") {
      setError("No se han ingresado peliculas");
      return;
    }
    if (query.length < 3) {
      setError("Debe ingresar al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [query]);

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
            value={query}
            name="query"
            type="text"
            placeholder="The Matrix, Aliens, Armageddon..."
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
