import { ArrowRight, Globe, Truck } from "lucide-react";

import Container from "../common/Container";

import heroPath from "../../assets/images/hero-path.svg";
import workHero from "../../assets/images/work-hero.png";

function WorkHeroDesktop() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <Container>
        <div className="relative min-h-[760px]">

          {/* Background Path */}

          <img
            src={heroPath}
            alt=""
            className="
              pointer-events-none
              absolute
              left-[90px]
              top-[-40px]
              w-[430px]
              opacity-30
            "
          />

          {/* Main Layout */}

          <div className="grid grid-cols-[38%_62%] items-center">

            {/* ================= LEFT ================= */}

            <div className="relative z-20">

              {/* Arrow */}

              <button
                className="
                  mb-20
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#5865F2]
                  text-white
                "
              >
                <ArrowRight size={22} />
              </button>

              {/* Badge */}

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#FFBC73]
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Featured Product
              </span>

              {/* Title */}

              <h1
                className="
                  mt-8
                  text-[118px]
                  font-bold
                  leading-[0.92]
                  text-[#252547]
                "
              >
                Bento
                <span className="text-[#5865F2]">.</span>
              </h1>

              {/* Subtitle */}

              <h2
                className="
                  mt-8
                  max-w-[420px]
                  text-[28px]
                  font-semibold
                  leading-[46px]
                  text-[#252547]
                "
              >
                Drag &amp; Drop 3D Visual Design System.
              </h2>

              {/* Features */}

              <div className="mt-20 flex gap-14">

                {/* Feature */}

                <div className="flex items-start gap-5">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#5865F2]
                      text-white
                    "
                  >
                    <Globe size={22} />
                  </div>

                  <p className="text-lg leading-8 text-[#5865F2]">
                    Global Digital
                    <br />
                    Agency of Record
                  </p>

                </div>

                {/* Feature */}

                <div className="flex items-start gap-5">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#5865F2]
                      text-white"
                    >
                      <Truck size={22} />
                  </div>

                  <p className="text-lg leading-8 text-[#5865F2]">
                    5 Years of Digital
                    <br />
                    Marketing Excellence
                  </p>

                </div>

              </div>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="relative flex justify-center">

              {/* Blue Shape */}

              <div
                className="
                  absolute
                  right-8
                  top-4
                  h-[500px]
                  w-[390px]
                  rounded-[38px]
                  bg-[#5865F2]
                  [clip-path:polygon(24%_0%,100%_0%,100%_100%,0%_100%)]
                "
              />

              {/* Hero Image */}

              <img
                src={workHero}
                alt="Bento"
                className="
                  relative
                  z-10
                  w-[760px]
                  max-w-none
                  -translate-x-10
                "
              />

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default WorkHeroDesktop;