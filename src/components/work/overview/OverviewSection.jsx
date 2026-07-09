import Container from "../../common/Container";

import OverviewHero from "./OverviewHero";
import OverviewContent from "./OverviewContent";

function OverviewSection() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <OverviewHero />
          <OverviewContent />
        </div>
      </Container>
    </section>
  );
}

export default OverviewSection;