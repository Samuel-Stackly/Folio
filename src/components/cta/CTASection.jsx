import ctaImage from "../../assets/images/cta.png";

function CTASection() {
  return (
    <section className="overflow-hidden py-20 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
        <div className="relative overflow-visible rounded-[34px] bg-[#5865F2] lg:rounded-[42px]">

          {/* Desktop Left Shape */}
          <div
            className="
              absolute
              -left-16
              top-16
              hidden
              h-[500px]
              w-[180px]
              rounded-r-[55px]
              bg-[#CFEAFF]
              lg:block
            "
          />

          {/* Right Shape */}
          <div
            className="
              absolute
              right-0
              bottom-0
              h-[320px]
              w-[120px]
              rounded-tl-[40px]
              bg-[#C79AF6]

              lg:-right-12
              lg:top-12
              lg:bottom-auto
              lg:h-[520px]
              lg:w-[340px]
              lg:rounded-[42px]
              lg:[clip-path:polygon(28%_0%,100%_0%,100%_100%,0%_100%)]
            "
          />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 items-center gap-10 px-7 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:px-16 lg:py-20">

            {/* Image */}
            <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
              <img
                src={ctaImage}
                alt="CTA"
                className="
                  w-[240px]
                  sm:w-[300px]
                  md:w-[360px]
                  lg:w-[560px]
                "
              />
            </div>

            {/* Text */}
            <div className="order-1 text-left">

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-white lg:text-sm">
                  05.
                </span>

                <span className="text-xs font-semibold text-white lg:text-sm">
                  Call to action
                </span>
              </div>

              <h2
                className="
                  mt-6
                  text-[44px]
                  font-bold
                  leading-[1.05]
                  text-white

                  sm:text-[54px]

                  lg:mt-8
                  lg:text-[74px]
                "
              >
                We Are
                <br />
                Looking for
                <br />
                Talented
                <br />
                Designers
              </h2>

              <button
                className="
                  mt-8
                  rounded-xl
                  bg-white
                  px-8
                  py-3
                  font-semibold
                  text-[#5865F2]

                  lg:mt-10
                  lg:px-10
                  lg:py-4
                "
              >
                Apply Now
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;