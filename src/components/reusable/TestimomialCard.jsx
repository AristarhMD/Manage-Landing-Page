export function TestimonialCard({ photoPath, name, text, current }) {
  return (
    <div
      className={`bg-gray-50 basis-full xl:min-w-140 h-full px-7.5 pb-6.75 ${current ? "flex" : "hidden"} xl:flex flex-col items-center`}
    >
      <img
        className="mb-6 size-18 -mt-9"
        src={photoPath}
        alt={`Photo of the ${name}`}
      />
      <p className="preset-4-b text-blue-950 mb-6 md:mb-4">{name}</p>
      <p className="featureText text-center">{`“${text}”`}</p>
    </div>
  );
}
