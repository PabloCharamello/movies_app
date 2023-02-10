import "./App.css";

function App() {
  return (
    <div className="page">
      <header>
        <h1>Movie search app</h1>
        <form className="form">
          <input type="text" placeholder="The Matrix, Aliens, Armaggedon..." />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
}

export default App;
