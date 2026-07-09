import { ArrowRight } from "lucide-react";

import { projects } from "../../constants/projects";

function FeaturedProject() {
  const featured = projects.find((item) => item.featured);

  return (
    <section className="mt-16 lg:mt-24">
      {/* Desktop */}
      <div className="hidden items-center gap-14 lg:grid lg:grid-cols-[320px_1fr]">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-full bg-[#8F8BFF] px-5 py-2 text-xs font-medium text-white">
            Featured Product
          </span>

          <h3 className="mt-8 text-[44px] font-bold leading-tight text-[#252547]">
            {featured.title}
          </h3>

          <p className="mt-6 max-w-[260px] text-base leading-8 text-[#6A6A7A]">
            {featured.description}
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          <div
            className="relative flex h-[460px] items-center justify-center overflow-hidden rounded-[34px]"
            style={{
              background: featured.bg,
            }}
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="w-[520px] transition duration-500 hover:scale-105"
            />

            {/* View Button */}
            <button className="absolute bottom-8 left-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#252547] text-sm font-semibold text-white">
              View
            </button>

            {/* Arrow */}
            <button className="absolute right-8 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#5865F2] text-white shadow-lg transition hover:scale-105">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div
          className="relative overflow-hidden rounded-[26px]"
          style={{
            background: featured.bg,
          }}
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full"
          />

          <span className="absolute bottom-5 left-5 inline-flex rounded-full bg-[#8F8BFF] px-4 py-2 text-[11px] font-medium text-white">
            Featured Product
          </span>
        </div>

        <h3 className="mt-8 text-[34px] font-bold leading-tight text-[#252547]">
          Bento 3D Illustration
        </h3>

        <p className="mt-5 text-base leading-8 text-[#6A6A7A]">
          Agency is a full-service agency, busy designing and building
          beautiful digital products, brands and experiences.
        </p>

        <button className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#252547] text-[#252547] transition hover:bg-[#252547] hover:text-white">
          <ArrowRight size={22} />
        </button>
      </div>
    </section>
  );
}

export default FeaturedProject;