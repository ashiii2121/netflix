import { useRef } from "react";
import "./Carousel.css";

const movies = [
  { title: "Dragon", image: "dragon.webp" },
  { title: "Deva", image: "deva.webp" },
  { title: "Pushpa 2", image: "pushpa2.webp" },
  { title: "Officer", image: "officer.webp" },
  { title: "Raw", image: "raw.webp" },
  { title: "Kakhee", image: "kakhee.webp" },
  { title: "Squid Game", image: "squid.webp" },
  { title: "Vidamuyarchi", image: "vidamuyarchi.webp" },
  { title: "Thendral", image: "thendral.webp" },
  { title: "Emergency", image: "emergency.webp" },
];

const Carousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Trending Now</h2>

      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={() => scroll("left")}>
          &#8249;
        </button>

        <div className="carousel-inner" ref={carouselRef}>
          {movies.map((movie, index) => (
            <div className="carousel-item" key={index}>
              <div className="movie-card">
                <div className="movie-number">{index + 1}</div>
                <img src={movie.image} alt={movie.title} />
                <h3 className="movie-title">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn right" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
