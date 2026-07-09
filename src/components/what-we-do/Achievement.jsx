import mobileImage from "../../assets/images/mobile.png";

function Achievement() {
  return (
    <section className="mt-20 lg:mt-32">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Mobile/Desktop Content */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#5865F2] lg:text-sm">
              03.
            </span>

            <span className="text-xs font-semibold text-[#5865F2] lg:text-sm">
              Achievement
            </span>
          </div>

          <h2 className="mt-5 text-[38px] font-bold leading-tight text-[#252547] lg:max-w-[560px] lg:text-[60px]">
            A design team building a curated marketplace for UI designers.
          </h2>

          <p className="mt-6 max-w-[520px] text-base leading-8 text-[#6B6B7A] lg:text-lg lg:leading-9">
            4,404 curated design resources to energize your creative workflow.
            We're a growing family of 334,531 designers and makers around the
            world.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-col items-start">
            <h3 className="text-[72px] font-bold leading-none text-[#252547] lg:text-[120px]">
              68
            </h3>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5865F2] text-lg">
                😊
              </div>

              <p className="text-lg font-semibold text-[#252547]">
                Successful Projects
              </p>
            </div>
          </div>
        </div>

        {/* Phone Image */}
        <div className="relative order-2 flex justify-center lg:order-1">
          {/* Pink Circle */}
          <div className="absolute top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-[#F8B9D2] lg:h-[430px] lg:w-[430px]" />

          <img
            src={mobileImage}
            alt="Mobile App"
            className="relative z-10 w-[220px] lg:w-[340px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Achievement;