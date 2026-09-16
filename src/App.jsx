import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AppNavbar from "./components/Navbar";
import Search from "./components/Search";
import Movie from "./components/Movie";
import DetailsMovie from "./components/DetailsMovie";
import "./App.css";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`,
      );
      const data = await response.json();
      setMovies(data.results || []);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Search />
      <Container className="py-4">
        <h4 className="mb-4">Popular Movies</h4>

        <Row className="g-4">
          {movies.map((movie) => (
            <Col key={movie.id} xs={6} sm={4} md={3} lg={2}>
              <Movie movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
function App() {
  return (
    <>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<DetailsMovie />} />

      </Routes>
    </>
  );
}
export default App;
