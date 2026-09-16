import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const rating = Math.round(movie.vote_average * 10);
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <Card className="movie-card">
        <div className="poster-wrapper">
          <Card.Img
            src={`${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`}
          />
          <span className="rating-badge">{rating}</span>
        </div>

        <Card.Body>
          <Card.Title className="movie-title">{movie.title}</Card.Title>
          <div className="movie-footer">
            <span className="movie-date">{movie.release_date}</span>
            <span className="watchlist-heart">&#9829;</span>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
export default Movie;
