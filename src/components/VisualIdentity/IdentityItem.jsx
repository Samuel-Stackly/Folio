function IdentityItem({ icon, title }) {
  return (
    <div className="flex items-center gap-6">

      {/* Icon */}

      <div
        className="
          flex
          h-16
          w-16
          flex-shrink-0
          items-center
          justify-center
          rounded-full
        "
      >
        <img
          src={icon}
          alt={title}
          className="h-16 w-16 object-contain"
        />
      </div>

      {/* Title */}

      <h4
        className="
          max-w-[290px]
          text-xl
          font-semibold
          leading-8
          text-[#252547]

          lg:text-[34px]
          lg:leading-[48px]
        "
      >
        {title}
      </h4>

    </div>
  );
}

export default IdentityItem;