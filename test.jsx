import { useState } from "react";
import "./Carousel.css";

export default function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    // If first slide, loop back to the end
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    // If last slide, loop back to the beginning
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <d244iv className="carousel-container">
      {/* Left Navigation Arrow */}
      <button className="arrow left-arrow" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Main Slide Window */}
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="carousel-slide" key={index}>
              <img src={slide.url} alt={slide.title || "slide"} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <button className="arrow right-arrow" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dot Indicators */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </d244iv>
  );
}
