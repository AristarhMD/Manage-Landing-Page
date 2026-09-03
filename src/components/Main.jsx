import { Button } from "./reusable/Button";

export function Main() {
  return (
    <main>
      <section className="flex flex-col xl:flex-row items-center justify-between gap-6 px-6 md:px-12 xl:p-0 xl:mx-auto xl:w-277.5 ">
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
    </main>
  );
}
