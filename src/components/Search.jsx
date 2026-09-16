import { Form, InputGroup, Button, Container } from "react-bootstrap";

function Search() {
  return (
    <div className="hero-section">
      <Container>
        <h1 className="hero-title">Welcome to our movie app</h1>
        <p className="hero-subtitle">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <Form className="search-form">
          <InputGroup className="search-bar">
            <Form.Control type="text" placeholder="Search and explore..." />
            <Button className="search-btn">Search</Button>
          </InputGroup>
        </Form>
      </Container>
    </div>
  );
}
export default Search;
