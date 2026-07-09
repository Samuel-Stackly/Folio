function FeatureCard({
  image,
  title,
  className = "",
}) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        rounded-[32px]
        border
        border-[#EEEEF5]
        bg-white
        px-8
        py-12
        text-center
        shadow-[0_20px_60px_rgba(0,0,0,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
        ${className}
      `}
    >
      <img
        src={image}
        alt={title}
        className="w-[92px] h-[92px] object-contain"
      />

      <h4 className="mt-8 text-[22px] font-semibold text-[#5865F2]">
        {title}
      </h4>
    </div>
  );
}

export default FeatureCard;