import React, { useState, useEffect } from "react";
import "./Hero.css";
import poster_1 from "../assets/poster_1.png";
import poster_2 from "../assets/poster_2.png";
import poster_3 from "../assets/poster_3.png";
import arrow_icon from "../assets/arrow.png";

const slides = [
  {
    image: poster_1,
    caption: "New Colletions for Everyone",
  },
  {
    image: poster_2,
    caption: "Trendy Styles for every Occasion",
  },
  {
    image: poster_3,
    caption: "Stay Ahead with new Arrivals",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <div className="caption">{slide.caption}</div>
        </div>
      ))}
      +
      <div className="button-hero">
        <div>Latest collection</div>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Hero;
