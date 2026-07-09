import Button from "../common/Button";

function Stats() {
  return (
    <div className="mt-12 grid gap-14 lg:mt-24 lg:grid-cols-2 lg:gap-20">
      <div>
        <div className="mb-8 h-12 w-[2px] bg-[#D48BFF]" />

        <h3 className="max-w-[500px] text-3xl font-bold leading-tight text-white lg:text-4xl">
          A design team building a curated marketplace for UI designers.
        </h3>

        <p className="mt-6 max-w-[470px] text-base leading-8 text-gray-400 lg:mt-8 lg:text-lg lg:leading-9">
          4,404 curated design resources to energize your creative workflow.
          We're a growing family of 334,531 designers and makers from around
          the world.
        </p>

        <Button className="mt-8 lg:mt-10">
          Contact Us
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#2D2D52] lg:h-[320px] lg:w-[320px]">
          <h2 className="text-7xl font-bold leading-none text-white lg:text-[140px]">
            28
          </h2>

          <p className="mt-2 text-lg font-semibold text-white lg:text-2xl">
            Biggest Branding
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;