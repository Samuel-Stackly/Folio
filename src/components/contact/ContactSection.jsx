import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import Container from "../common/Container";

import circularPath from "../../assets/images/circularpath.svg";
import logo from "../../assets/icons/logo.svg";

function ContactSection() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[34px] bg-[#5865F2] lg:rounded-[42px]">

          {/* Background Path */}
          <img
            src={circularPath}
            alt=""
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              w-[330px]
              opacity-30

              lg:w-[560px]
            "
          />

          {/* ========================= */}
          {/* Desktop */}
          {/* ========================= */}

          <div className="hidden lg:block">

            {/* Top */}

            <div className="relative z-10 border-b border-white/10 px-20 py-20">

              <div className="flex flex-col items-center text-center">

                <img
                  src={logo}
                  alt=""
                  className="h-8"
                />

                <div className="mt-6 flex items-center gap-2 text-white">
                  👋
                  <span>Say hello</span>
                </div>

                <h2 className="mt-10 max-w-[700px] text-5xl font-bold leading-tight text-white">
                  A design team building a curated
                  marketplace for UI designers.
                </h2>

              </div>

            </div>

            {/* Bottom */}

            <div className="grid grid-cols-2">

              <div className="border-r border-white/10 px-20 py-24">

                <h2 className="max-w-[420px] text-[64px] font-bold leading-tight text-white">
                  Let's talk
                  <br />
                  about your
                  <br />
                  next project
                </h2>

              </div>

              <div className="flex items-center justify-between px-20 py-24">

                <div>

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#A8D95D] text-[#252547]">

                    <MessageCircle size={30} />

                  </div>

                  <h3 className="max-w-[240px] text-[34px] font-bold leading-tight text-white">
                    Invest in your designs today!
                  </h3>

                </div>

                <button className="flex h-16 w-16 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-[#5865F2]">

                  <ArrowRight size={22} />

                </button>

              </div>

            </div>

          </div>

          {/* ========================= */}
          {/* Mobile */}
          {/* ========================= */}

          <div className="relative z-10 px-8 py-10 lg:hidden">

            {/* Chat Icon */}

            <div className="flex justify-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A8D95D] text-[#252547]">

                <MessageCircle size={28} />

              </div>

            </div>

            {/* Say Hello */}

            <div className="mt-6 flex items-center justify-center gap-2 text-white">

              👋

              <span className="font-medium">
                Say hello
              </span>

            </div>

            {/* Heading */}

            <h2 className="mx-auto mt-10 max-w-[320px] text-center text-[34px] font-bold leading-tight text-white">

              A design team building a curated marketplace for UI designers.

            </h2>

            {/* Divider */}

            <div className="my-12 h-px bg-white/10" />

            {/* CTA */}

            <h3 className="text-[48px] font-bold leading-tight text-white">

              Let's talk
              <br />
              about your
              <br />
              next project

            </h3>

            {/* Button */}

            <button className="mt-12 w-full rounded-xl bg-white py-5 text-lg font-semibold text-[#5865F2] transition hover:scale-[1.02]">

              Contact Us

            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default ContactSection;