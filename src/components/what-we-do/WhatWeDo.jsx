import Container from "../common/Container";

import WhatWeDoHeader from "./ WhatWeDoHeader";
import Services from "./Services";
import Achievement from "./Achievement";

import circularPath from "../../assets/images/circularpath.svg";

function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Top Left Path */}
      <img
        src={circularPath}
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-[220px] opacity-50 lg:w-[420px]"
      />

      {/* Bottom Right Path */}
      <img
        src={circularPath}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 w-[220px] rotate-180 opacity-40 lg:w-[420px]"
      />

      <Container>
        <div className="relative z-10">
          <WhatWeDoHeader />

          <Services />

          <Achievement />
        </div>
      </Container>
    </section>
  );
}

export default WhatWeDo;