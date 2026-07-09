function IdentityStats() {
  return (
    <div className="mt-12 lg:mt-16">

      {/* Number */}

      <div className="flex items-start">

        <h3
          className="
            text-[96px]
            font-bold
            leading-none
            tracking-[-4px]
            text-[#5865F2]

            lg:text-[140px]
          "
        >
          80
        </h3>

        <span
          className="
            mt-2
            text-[40px]
            font-bold
            leading-none
            text-[#5865F2]

            lg:mt-3
            lg:text-[58px]
          "
        >
          +
        </span>

      </div>

      {/* Bottom Label */}

      <div className="mt-4 flex items-center gap-6">

        <span
          className="
            text-xl
            font-semibold
            text-[#252547]
          "
        >
          UI Elements
        </span>

        <span className="text-3xl text-[#5865F2]">
          —
        </span>

      </div>

    </div>
  );
}

export default IdentityStats;