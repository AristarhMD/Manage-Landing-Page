import testimonials from "../testimonial.js";
import { TestimonialCard } from "./reusable/TestimomialCard.jsx";
import { useState } from "react";

export function Carousel() {
  // State for following the current slide:
  const [currentIndx, setCurrentIndx] = useState(0);

  // States for following swipes:
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  // Swipe trigger:
  const minSwipeDistance = 50;

  // Swipe logic
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchEnd - touchStart;
    const isSwipedLeft = distance > minSwipeDistance;
    const isSwipedRight = distance < minSwipeDistance;

    if (isSwipedLeft) {
      if (currentIndx === 0) {
        goToIndex(testimonials.length - 1);
      } else goToIndex(currentIndx - 1);
    } else if (isSwipedRight) {
      if (currentIndx === testimonials.length - 1) {
        goToIndex(0);
      } else goToIndex(currentIndx + 1);
    }
  };

  // Change ind
  const goToIndex = (idx) => setCurrentIndx(idx);

  return (
    <div className="overflow-x-hidden flex flex-col gap-8 mx-2 md:mx-0">
      <div
        className="flex justify-center items-center w-full h-68.5 pt-9 xl:gap-6"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
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
