import { Globe, Truck } from "lucide-react";

import Container from "../common/Container";

import heroPath from "../../assets/images/hero-path.svg";
import workHero from "../../assets/images/work-hero.png";

function WorkHeroMobile() {
  return (
    <section className="overflow-hidden bg-white pt-8 pb-12">
      <Container>
        <div className="relative">

          {/* Background Path */}
          <img
            src={heroPath}
            alt=""
            className="pointer-events-none absolute right-[-70px] top-[-40px] w-[240px] opacity-40"
          />

          {/* Badge */}
          <span className="inline-flex rounded-full bg-[#FFBC73] px-4 py-2 text-[11px] font-semibold text-white">
            Featured Product
          </span>

          {/* Title */}
          <h1 className="mt-5 text-[64px] font-bold leading-none text-[#252547]">
            Bento
            <span className="text-[#5865F2]">.</span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-5 max-w-[220px] text-[26px] font-semibold leading-[36px] text-[#252547]">
            Drag &amp; Drop 3D Visual Design System.
          </h2>

          {/* Features */}
          <div className="mt-10 grid grid-cols-2 gap-8">

            <div>
              <div className="flex h-14 w-10 items-center justify-center rounded-full bg-[#5865F2]">
                <Globe size={18} className="text-white" />
              </div>

              <p className="mt-4 text-[14px] leading-5 text-[#5865F2]">
                Global Digital
                <br />
                Agency of
                <br />
                Record
              </p>
            </div>

            <div>
              <div className="flex h-14 w-10 items-center justify-center rounded-full bg-[#5865F2]">
                <Truck size={18} className="text-white" />
              </div>

              <p className="mt-4 text-[14px] leading-5 text-[#5865F2]">
                5 Years of
                <br />
                Digital
                <br />
                Marketing
                <br />
                Excellence
              </p>
            </div>

          </div>

          {/* Hero */}
          <div className="relative mt-14 flex justify-center">

            {/* Blue Shape */}
            <div
              className="
                absolute
                bottom-0
                right-[-10px]
                h-[260px]
                w-[220px]
                rounded-[28px]
                bg-[#5865F2]
                [clip-path:polygon(30%_0%,100%_0%,100%_100%,0%_100%)]
              "
            />

            {/* Image */}
            <img
              src={workHero}
              alt="Bento"
              className="relative z-10 w-[330px]"
            />

          </div>

        </div>
      </Container>
    </section>
  );
}

export default WorkHeroMobile;