import Container from "../common/Container";

import PartnershipsHeader from "./PartnershipsHeader";
import FeaturedProject from "./FeaturedProject";
import ProjectsGrid from "./ProjectsGrid";

import circularPath from "../../assets/images/circularpath.svg";

function Partnerships() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Decorative Path */}
      <img
        src={circularPath}
        alt=""
        className="pointer-events-none absolute left-0 top-60 w-[260px] opacity-50 lg:w-[420px]"
      />

      <img
        src={circularPath}
        alt=""
        className="pointer-events-none absolute bottom-20 right-0 w-[280px] rotate-180 opacity-50 lg:w-[520px]"
      />

      <Container>
        <div className="relative z-10">
          <PartnershipsHeader />

          <FeaturedProject />

          <ProjectsGrid />
        </div>
      </Container>
    </section>
  );
}

export default Partnerships;