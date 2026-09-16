import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import axios from "axios";

function DetailsMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`,
      );

      setMovie(res.data);
    }

    fetchDetails();
  }, [id]);

  if (!movie) return null;

  const starCount = Math.round((movie.vote_average || 0) / 2);

  return (
    <Container className="details-container">
      <Row>
        <Col md={4}>
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="details-poster"
          />
        </Col>

        <Col md={8}>
          <div className="details-header">
            <h2>{movie.title}</h2>
            <span className="watchlist-heart">&#9829;</span>
          </div>

          <p className="details-year">{movie.release_date}</p>

          <div className="details-rating">
            <span className="stars">
              {"★".repeat(starCount)}
              {"☆".repeat(5 - starCount)}
            </span>

            <span className="votes">{movie.vote_count}</span>
          </div>

          <p className="details-overview">{movie.overview}</p>

          <div className="genre-list">
            {movie.genres?.map((genre) => (
              <Badge key={genre.id} className="genre-badge">
                {genre.name}
              </Badge>
            ))}
          </div>

          <Row className="details-meta">
            <Col xs={6} sm={4}>
              <strong>Duration:</strong> {movie.runtime} Min.
            </Col>

            <Col xs={6} sm={8}>
              <strong>Languages:</strong>{" "}
              {movie.spoken_languages
                ?.map((lang) => lang.english_name)
                .join(", ")}
            </Col>
          </Row>

          {movie.production_companies?.[0]?.logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.production_companies[0].logo_path}`}
              alt={movie.production_companies[0].name}
              className="production-logo"
            />
          )}
          {movie.homepage && (
            <Button
              href={movie.homepage}
              target="_blank"
              className="website-btn"
            >
              Website
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default DetailsMovie;
