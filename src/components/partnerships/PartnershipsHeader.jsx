
function PartnershipsHeader() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
      <div className="max-w-[620px]">
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold text-[#5865F2] lg:text-sm">
            04.
          </span>

          <span className="text-xs font-semibold text-[#5865F2] lg:text-sm">
            Famous Projects
          </span>
        </div>

        <h2 className="mt-5 text-[48px] font-bold leading-[1.05] tracking-[-0.03em] text-[#252547] lg:text-[72px]">
          Our Partnerships
        </h2>

        <p className="mt-6 max-w-[430px] text-base leading-8 text-[#66667A] lg:text-lg lg:leading-9">
          Agency is a full-service agency, busy designing and building
          beautiful digital products, brands, and experiences.
        </p>
      </div>
    </div>
  );
}

export default PartnershipsHeader