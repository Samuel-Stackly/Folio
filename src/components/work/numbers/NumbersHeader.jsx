import logo from "../../../assets/icons/logo.svg";
import heroPath from "../../../assets/images/hero-path.svg";

function NumbersHeader() {
  return (
    <div className="relative overflow-hidden">

      {/* Background Path */}

      <img
        src={heroPath}
        alt=""
        className="
          pointer-events-none
          absolute
          -left-24
          -top-10
          w-[420px]
          opacity-10

          lg:left-0
          lg:top-0
          lg:w-[480px]
        "
      />

      <div className="relative z-10">

        {/* Top Row */}

        <div className="flex items-center gap-5">

          <img
            src={logo}
            alt="Folio"
            className="h-8 w-8"
          />

          <span className="text-sm font-medium text-[#A5A5B5]">
            02.
          </span>

          <span className="text-sm font-medium text-white">
            Bento 3D Kit
          </span>

        </div>

        {/* Heading */}

        <h2
          className="
            mt-8
            max-w-[620px]
            text-[52px]
            font-bold
            leading-tight
            text-white

            lg:text-[72px]
          "
        >
          By the
          <br />
          Numbers.
        </h2>

      </div>

    </div>
  );
}

export default NumbersHeader;