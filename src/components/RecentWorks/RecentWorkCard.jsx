import { ArrowRight } from "lucide-react";

function RecentWorkCard({
  image,
  title,
  description,
  bgColor,
  featured = false,
}) {
  return (
    <div>

      {/* Image Card */}

      <div
        className={`
          relative
          overflow-hidden
          rounded-[28px]
          lg:rounded-[32px]
          ${bgColor}
          h-[320px]
          lg:h-[430px]
        `}
      >

        {/* Featured Badge */}

        {featured && (
          <span
            className="
              absolute
              left-6
              top-6
              z-20
              rounded-full
              bg-[#7B74FF]
              px-5
              py-2
              text-xs
              font-semibold
              text-white
            "
          >
            Featured Product
          </span>
        )}

        {/* Image */}

        <img
          src={image}
          alt={title}
          className="
            absolute
            bottom-0
            left-1/2
            w-[78%]
            -translate-x-1/2
            object-contain

            lg:w-[82%]
          "
        />

        {/* Arrow */}

        <button
          className="
            absolute
            bottom-6
            -right-6

            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-full
            border-2
            border-[#252547]
            bg-white
            text-[#252547]

            transition
            hover:bg-[#5865F2]
            hover:border-[#5865F2]
            hover:text-white
          "
        >
          <ArrowRight size={20} />
        </button>

      </div>

      {/* Content */}

      <h3
        className="
          mt-8
          text-[28px]
          font-bold
          leading-tight
          text-[#252547]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-5
          max-w-[360px]
          text-base
          leading-8
          text-[#8B8B96]
        "
      >
        {description}
      </p>

    </div>
  );
}

export default RecentWorkCard;