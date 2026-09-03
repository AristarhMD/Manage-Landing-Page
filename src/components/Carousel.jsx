import testimonials from "../testimonial.js";
import { TestimonialCard } from "./reusable/TestimomialCard.jsx";
import { useState } from "react";

export function Carousel() {
  const [currentIndx, setCurrentIndx] = useState(0);

  const goToIndex = (idx) => setCurrentIndx(idx);

  return (
    <div className="overflow-x-hidden flex flex-col gap-8 mx-2 md:mx-0">
      <div className="flex justify-center items-center w-full h-68.5 pt-9 xl:gap-6">
        {testimonials.map((card, id) => (
          <TestimonialCard
            key={id}
            photoPath={card.photoPath}
            name={card.name}
            text={card.text}
            current={currentIndx === id}
          />
        ))}
      </div>
      {/* Dot's */}
      <div className="mx-auto flex gap-2 xl:hidden xl:invisible">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndx === idx ? "active" : ""}`}
            onClick={() => goToIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
