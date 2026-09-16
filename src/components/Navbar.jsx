import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

function AppNavbar() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar app-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand brand-logo">
          Movie App
        </Link>

        <ul className="navbar-nav d-flex flex-row align-items-center gap-3">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={(e) => e.preventDefault()}
            >
              {language.toUpperCase()}
            </a>

            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setLanguage("en")}
                >
                  English
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setLanguage("ar")}
                >
                  Arabic
                </button>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <span className="nav-link watchlist-heart-nav">&#9829;</span>
          </li>
          <li className="nav-item">
            <Link to="/watchlist" className="nav-link watchlist-link">
              Watchlist
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AppNavbar;
