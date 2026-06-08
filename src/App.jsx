import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import "./styles/App.css"
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
