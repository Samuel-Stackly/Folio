import overviewImage from "../../../assets/images/Over-1.png";

function OverviewHero() {
  return (
    <div className="flex flex-col items-center">

      {/* Hero Illustration */}
      <div className="relative flex items-center justify-center">

        {/* Purple Circle */}
        <div
          className="
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#C693F7]

            lg:h-[420px]
            lg:w-[420px]
          "
        />

        {/* Image */}
        <img
          src={overviewImage}
          alt="Overview"
          className="
            absolute
            z-10
            w-[250px]

            lg:w-[360px]
          "
        />

      </div>

      {/* Slider Dots */}
      <div className="mt-8 flex items-center gap-3">

        <span className="h-2 w-2 rounded-full bg-[#E5E5E5]" />

        <span className="h-2 w-2 rounded-full bg-[#5865F2]" />

        <span className="h-2 w-2 rounded-full bg-[#E5E5E5]" />

      </div>

    </div>
  );
}

export default OverviewHero;