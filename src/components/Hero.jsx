import Search from "./Search";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">Welcome to our movie app</h1>

        <p className="hero-text">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>

        <Search />
      </div>
    </section>
  );
}

export default Hero;
