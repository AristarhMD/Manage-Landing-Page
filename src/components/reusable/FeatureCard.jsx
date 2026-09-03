export function FeatureCard({ order, name, text }) {
  return (
    <div className="grid grid-cols-[min-content_1fr] xl:grid-cols-[67px_1fr] grid-rows-[repeat(2,min-content)] gap-y-2 md:gap-y-4 xl:gap-y-2 xl:gap-x-6">
      <p className="col-start-1 col-span-2 grid items-center grid-cols-[min-content_1fr] gap-x-4 md:gap-x-8 xl:gap-x-6 bg-orange-50 xl:bg-transparent rounded-l-[39px] preset-4-b">
        <span className="px-6 py-2 bg-orange-400 text-white rounded-[39px]  ">
          {order}
        </span>
        <span className=" text-blue-950 ">{name}</span>
      </p>
      <p className="featureText col-span-2 xl:col-span-1 xl:col-start-2">
        {text}
      </p>
    </div>
  );
}
