import { ArrowLeft, ArrowRight } from "lucide-react";

function WhatWeDoHeader() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden items-start justify-between lg:flex">
        <div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[#5865F2]">
              02.
            </span>

            <span className="text-sm font-medium text-[#5865F2]">
              What We Do
            </span>
          </div>

          <h2 className="mt-5 max-w-[720px] text-[64px] font-bold leading-[1.1] tracking-[-0.03em] text-[#252547]">
            We Make Designs that
            <br />
            Lead and Inpire.
          </h2>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <button className="text-[#D9D9E8] transition-colors hover:text-[#252547]">
            <ArrowLeft size={22} />
          </button>

          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5865F2] text-white transition-all duration-300 hover:scale-105">
            <ArrowRight size={22} />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-[#5865F2]">
            02.
          </span>

          <span className="text-xs font-medium text-[#5865F2]">
            What We Do
          </span>
        </div>

        <h2 className="mt-4 text-[44px] font-bold leading-[1.05] tracking-[-0.03em] text-[#252547]">
          We Make
          <br />
          Designs that
          <br />
          Lead and
          <br />
          Inpire.
        </h2>

        <div className="mt-8 flex items-center gap-5">
          <button className="text-[#D9D9E8]">
            <ArrowLeft size={20} />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5865F2] text-white">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
}

export default WhatWeDoHeader;