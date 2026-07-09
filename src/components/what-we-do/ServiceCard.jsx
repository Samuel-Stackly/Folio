function ServiceCard({ service, mobile = false }) {
  const {
    desktopImage,
    mobileImage,
    active,
    title,
  } = service;

  // Mobile
  if (mobile) {
    return (
      <div
        className={`flex h-[96px] items-center rounded-[24px] px-6 transition-all duration-300 ${
          active
            ? "bg-[#5865F2]"
            : "bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
        }`}
      >
        <img
          src={mobileImage}
          alt={title}
          className="h-[60px] w-auto flex-shrink-0"
        />

        <h3
          className={`ml-6 text-lg font-semibold ${
            active ? "text-white" : "text-[#5865F2]"
          }`}
        >
          {/* {title} */}
        </h3>
      </div>
    );
  }

  // Desktop
  return (
    <div
      className={`flex flex-1 items-center justify-center transition-all duration-300 ${
        active
          ? "-my-10 h-[405px] rounded-[42px] bg-[#5865F2] shadow-[0_35px_70px_rgba(88,101,242,0.28)]"
          : "h-[220px] hover:-translate-y-2"
      }`}
    >
      <img
        src={desktopImage}
        alt={title}
        className={`transition-all duration-300 ${
          active ? "w-[185px]" : "w-[170px]"
        }`}
      />
    </div>
  );
}

export default ServiceCard;