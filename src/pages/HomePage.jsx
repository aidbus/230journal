import React from "react";
import SearchBar from "../components/SearchBar"; // Import the SearchBar

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <div className="overlay">
          <h1>Welcome to Criminology Research</h1>
          <p>Discover groundbreaking research and faculty insights.</p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <h2>Search Publications</h2>
        <SearchBar />
      </div>
    </div>
  );
};

export default HomePage;
