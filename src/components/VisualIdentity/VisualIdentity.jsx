import Container from "../common/Container";

import VisualIdentityHeader from "./VisualIdentityHeader";
import IdentityStats from "./IdentityStats";
import IdentityCard from "./IdentityCard";

function VisualIdentity() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <Container>

        <div className="relative grid items-start gap-16 lg:grid-cols-[46%_54%] lg:gap-24">

          {/* Left */}

          <div className="relative z-10">

            <VisualIdentityHeader />

            <IdentityStats />

          </div>

          {/* Right */}

          <div className="relative mt-6 lg:mt-24">

            {/* Decorative Shape */}

            <div
              className="
                absolute
                -top-20
                -right-28
                -z-10

                h-[430px]
                w-[320px]

                rotate-[12deg]

                rounded-[52px]

                bg-[#C996F4]

                shadow-[0_50px_120px_rgba(0,0,0,0.16)]
              "
            />

            <IdentityCard />

          </div>

        </div>

      </Container>
    </section>
  );
}

export default VisualIdentity;