import Container from "../common/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import heroPath from "../../assets/images/hero-path.svg";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 lg:pt-16">
      {/* Background Path */}
      <img
        src={heroPath}
        alt=""
        className="pointer-events-none absolute left-[22%] top-0 -z-10 hidden w-[42%] select-none lg:block"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[46%_54%]">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}


export default Hero;