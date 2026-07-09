import FeatureCards from "./FeatureCards";

function OverviewContent() {
  return (
    <div className="flex flex-col">

      {/* Heading */}

      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-[#5865F2]">
          01.
        </span>

        <span className="text-sm font-medium text-[#5865F2]">
          Overview
        </span>
      </div>

      {/* Title */}

      <h2
        className="
          mt-6
          max-w-[620px]
          text-[44px]
          font-bold
          leading-tight
          text-[#252547]

          lg:text-[68px]
        "
      >
        The First Fully
        <br />
        Editable, 3D Visual
        <br />
        Design System.
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-[560px]
          text-[17px]
          leading-9
          text-[#6B6B77]
        "
      >
        Effortlessly combine different elements to create compelling
        compositions that will surely help you tell a better story for
        your landing pages, websites, portfolios, presentations, and
        more in just a matter of minutes.
      </p>

      {/* Highlight */}

      <h3
        className="
          mt-10
          max-w-[560px]
          text-[24px]
          font-bold
          leading-10
          text-[#252547]
        "
      >
        🔥 The number of applications and
        <br />
        use cases is nearly endless.
      </h3>

      {/* Cards */}

      <div className="mt-16">
        <FeatureCards />
      </div>

    </div>
  );
}

export default OverviewContent;