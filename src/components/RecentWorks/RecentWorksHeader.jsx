import { ArrowRight } from "lucide-react";

import logo from "../../assets/icons/logo.svg";
import heroPath from "../../assets/images/hero-path.svg";

function RecentWorksHeader() {
  return (
    <div className="relative">

      {/* Background Path */}

      <img
        src={heroPath}
        alt=""
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          w-[260px]
          opacity-30

          lg:-left-28
          lg:-top-28
          lg:w-[420px]
        "
      />

      <div className="relative z-10 flex items-start justify-between gap-10">

        {/* Left */}

        <div>

          {/* Top Label */}

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="Logo"
              className="h-6 w-6"
            />

            <span className="font-semibold text-[#5865F2]">
              04.
            </span>

            <span className="font-medium text-[#5865F2]">
              You may also like
            </span>

          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-5xl
              font-bold
              leading-tight
              text-[#252547]

              lg:text-[72px]
              lg:leading-[82px]
            "
          >
            Recent Works
          </h2>

          {/* Description */}

          <p
            className="
              mt-8
              max-w-[430px]
              text-lg
              leading-9
              text-[#8B8B96]
            "
          >
            Agency is a full-service agency, busy designing and
            building beautiful digital products, brands, and
            experiences.
          </p>

        </div>

        {/* Arrow */}

        <button
          className="
            hidden
            lg:flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#5865F2]
            text-white
            transition
            hover:scale-105
          "
        >
          <ArrowRight size={24} />
        </button>

      </div>

    </div>
  );
}

export default RecentWorksHeader;