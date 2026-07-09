import Container from "../common/Container";

import WhoWeAreHeader from "./WhoWeAreHeader";
import Timeline from "./Timeline";
import Showcase from "./Showcase";
import Stats from "./Stats";

function WhoWeAre() {
  return (
    <section
      className="overflow-hidden bg-[#252547] py-16 lg:py-24"
      style={{ marginTop: "10px" }}
    >
      <Container>
        <div className="relative">
          <WhoWeAreHeader />

          <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-[110px_1fr] lg:gap-10">
            <Timeline />
            <Showcase />
          </div>

          <Stats />
        </div>
      </Container>
    </section>
  );
}

export default WhoWeAre;