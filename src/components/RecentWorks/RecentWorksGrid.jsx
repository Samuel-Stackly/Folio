import overOne from "../../assets/images/over-1.png";
import recent from "../../assets/images/recent.png";
import heroPath from "../../assets/images/hero-path.svg";

import RecentWorkCard from "./RecentWorkCard";

function RecentWorksGrid() {
  const description =
    "Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.";

  return (
    <div className="relative">

      {/* Background Path */}

      <img
        src={heroPath}
        alt=""
        className="
          pointer-events-none
          absolute
          -left-40
          top-44
          w-[340px]
          opacity-30

          lg:-left-52
          lg:top-56
          lg:w-[520px]
        "
      />

      <img
        src={heroPath}
        alt=""
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-10
          hidden
          w-[420px]
          opacity-30
          lg:block
        "
      />

      {/* Cards */}

      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          gap-16

          md:grid-cols-2
          md:gap-10

          lg:gap-16
        "
      >
        <RecentWorkCard
          image={overOne}
          title="Bento 3D Illustration"
          description={description}
          bgColor="bg-[#FFC979]"
          featured
        />

        <div className="md:mt-12 lg:mt-0">
          <RecentWorkCard
            image={recent}
            title="Bento Vol. 3"
            description={description}
            bgColor="bg-[#CFEAFF]"
          />
        </div>
      </div>

    </div>
  );
}

export default RecentWorksGrid;