import Container from "../../common/Container";

import NumbersHeader from "./NumbersHeader";
import NumbersStats from "./NumbersStats";
import NumbersTabs from "./NumbersTabs";
import NumbersSlider from "./NumbersSlider";

function NumbersSection() {
  return (
    <section className="relative overflow-visible bg-[#252547] py-20 lg:py-28" style={{ marginBottom: "90px" }}>
      <Container>
        <div className="relative">

          {/* Header */}
          <NumbersHeader />

          {/* Stats */}
          <div className="mt-16">
            <NumbersStats />
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <NumbersTabs />
          </div>

          {/* Slider */}
          <div className="relative z-20 mt-20 lg:mt-24 -mb-40 lg:-mb-56">
            <NumbersSlider />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default NumbersSection;