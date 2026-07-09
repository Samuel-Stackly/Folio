function Timeline() {
  const years = [2017, 2018, 2019, 2020, 2021];

  return (
    <div className="hidden flex-col justify-center gap-14 lg:flex">
      {years.map((year) => (
        <div
          key={year}
          className={`text-sm ${
            year === 2020
              ? "font-semibold text-white"
              : "text-gray-500"
          }`}
        >
          {year}
        </div>
      ))}
    </div>
  );
}

export default Timeline;