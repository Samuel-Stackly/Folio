import logo from "../../assets/icons/logo.svg";
import heroPath from "../../assets/images/hero-path.svg";

function VisualIdentityHeader() {
  return (
    <div className="relative">

      {/* Background Path */}

      <img
        src={heroPath}
        alt=""
        className="
          pointer-events-none
          absolute
          -left-16
          -top-20
          w-[260px]
          opacity-35

          lg:-left-24
          lg:-top-28
          lg:w-[360px]
        "
      />

      <div className="relative z-10">

        {/* Top Label */}

        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="Logo"
            className="h-6 w-6"
          />

          <span className="text-base font-semibold text-[#5865F2]">
            03.
          </span>

          <span className="text-base font-medium text-[#5865F2]">
            Visual Identity
          </span>

        </div>

        {/* Heading */}

        <h2
          className="
            mt-8
            max-w-[520px]
            text-5xl
            font-bold
            leading-tight
            text-[#252547]

            lg:text-[72px]
            lg:leading-[82px]
          "
        >
          Evolving
          <br />
          the look &
          <br />
          feel.
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

    </div>
  );
}

export default VisualIdentityHeader;