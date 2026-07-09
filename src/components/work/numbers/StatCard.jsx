import { Download } from "lucide-react";

function StatCard({
  number,
  suffix = "",
  title,
  description,
  emoji = "",
}) {
  return (
    <div className="w-full">

      {/* Number */}

      <div className="flex items-start">

        <h3
          className="
            text-[110px]
            font-bold
            leading-none
            text-white

            lg:text-[150px]
          "
        >
          {number}
        </h3>

        {suffix && (
          <span
            className="
              ml-2
              mt-3
              text-5xl
              font-bold
              text-white

              lg:text-6xl
            "
          >
            {suffix}
          </span>
        )}

      </div>

      {/* Title */}

      <h4
        className="
          mt-6
          text-2xl
          font-semibold
          text-white
        "
      >
        {title}

        {emoji && (
          <span className="ml-2">
            {emoji}
          </span>
        )}
      </h4>

      {/* Divider */}

      <div className="my-8 h-px w-full bg-white/15" />

      {/* Description */}

      <p
        className="
          max-w-[340px]
          text-lg
          leading-10
          text-[#8E90A6]
        "
      >
        {description}
      </p>

      {/* Download */}

      <button
        className="
          mt-10
          flex
          items-center
          gap-4
          text-white
          transition
          hover:opacity-80
        "
      >

        <span
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#5865F2]
          "
        >
          <Download size={18} />
        </span>

        <span className="font-semibold">
          Download
        </span>

      </button>

    </div>
  );
}

export default StatCard;