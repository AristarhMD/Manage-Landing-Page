import { Button } from "./reusable/Button";
import cardsData from "../feature.js";
import { FeatureCard } from "./reusable/FeatureCard.jsx";
import { Carousel } from "./Carousel.jsx";

export function Main() {
  return (
    <main className="flex flex-col gap-28 md:gap-24 xl:gap-33">
      {/* Content section */}
      <section className="flex flex-col xl:flex-row items-center justify-between gap-6 px-6 md:px-12 xl:p-0 xl:mx-auto xl:w-277.5">
        <img
          src="../src/assets/illustration-intro.svg"
          alt="Hero image"
          className="object-cover md:w-135 xl:order-2"
        />
        <div className="text-center md:px-18 xl:p-0 xl:text-left xl:basis-125">
          <h1 className="preset-2 xl:preset-1 text-blue-950 mb-6 xl:mb-4">
            Bring everyone together to build better products.
          </h1>
          <p className="preset-4-r text-blue-950 opacity-50 mb-8 md:mb-6 xl:mb-10 xl:w-[70%]">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button style="orangeBtn">Get Started</Button>
        </div>
      </section>

      {/* Feature section */}
      <section className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10 md:gap-8 xl:mx-auto xl:w-277.5 ">
        <div className="text-center xl:text-left px-9 md:px-0 md:max-w-125 xl:max-w-111">
          <p className="preset-3 text-blue-950 md:preset-2 mb-6">
            What’s different about Manage?
          </p>
          <p className="featureText">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-10 ml-4 md:ml-8 xl:ml-0 xl:basis-135">
          {cardsData.map((card, id) => (
            <FeatureCard
              key={id}
              order={card.number}
              name={card.name}
              text={card.text}
            />
          ))}
        </div>
      </section>

      {/* Testimonial and CTA section */}
      <section className="flex flex-col items-center gap-21.5 md:gap-23.75 xl:gap-45">
        <div className="md:w-[72.78%] xl:w-full overflow-hidden">
          <p className="preset-3 md:preset-2 text-blue-950 mb-10 md:mb-16 text-center">
            What they’ve said
          </p>
          {/* Testimonial */}
          <div className="flex flex-col items-center gap-8 xl:gap-12">
            <Carousel />
            <Button style="orangeBtn">Get Started</Button>
          </div>
        </div>

        <div className="bg-orange-400 w-full h-101.25 md:h-auto md:py-10 xl:py-16 px-10 flex items-center justify-center">
          <div className=" flex flex-col xl:flex-row justify-between items-center gap-10  xl:w-277.5">
            <p className="preset-2 text-white text-center md:max-w-115 xl:text-left">
              Simplify how your team works today.
            </p>
            <Button style="whiteBtn">Get Started</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
