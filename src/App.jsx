import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";

function App() {
  const { movies: mappedMovies } = useMovies();
  return (
    <div className="page">
      <header>
        <h1>Movies search App</h1>
        <form className="form">
          <input type="text" placeholder="The Matrix, Aliens, Armageddon..." />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
