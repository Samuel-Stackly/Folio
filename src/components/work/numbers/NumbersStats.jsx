import StatCard from "./StatCard";

function NumbersStats() {
  const description =
    "Bento is the first fully editable, 3D visual design system with global auto-updatable style guides built right in Figma.";

  return (
    <>
      {/* ================= Desktop ================= */}

      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-24">

        {/* Left Card */}
        <div className="mt-40">
          <StatCard
            number="20"
            title="Pre-build Scenes"
            emoji="🔥"
            description={description}
          />
        </div>

        {/* Right Card */}
        <div className="relative mt-6 overflow-visible">

          {/* Decorative Shape */}

          <div
            className="
              absolute
              -top-14
              -right-14
              z-0
              h-44
              w-44
              rounded-[42px]
              bg-[#C996F4]
              rotate-12
              shadow-[0_40px_80px_rgba(0,0,0,0.35)]
            "
          />

          <div className="relative z-10">
            <StatCard
              number="40"
              suffix="+"
              title="Scene Objects"
              description={description}
            />
          </div>

        </div>

      </div>

      {/* ================= Mobile ================= */}

      <div className="space-y-16 lg:hidden">

        <StatCard
          number="40"
          suffix="+"
          title="Scene Objects"
          description={description}
        />

        <StatCard
          number="20"
          title="Pre-build Scenes"
          emoji="🔥"
          description={description}
        />

      </div>
    </>
  );
}

export default NumbersStats;