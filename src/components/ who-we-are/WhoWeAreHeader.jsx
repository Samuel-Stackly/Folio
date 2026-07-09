import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

function WhoWeAreHeader() {
  return (
    <>
      <div className="hidden items-start justify-between lg:flex">
        <div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">01</span>

            <span className="text-sm font-medium text-white">
              Who We Are
            </span>
          </div>

          <h2 className="mt-5 max-w-[640px] text-6xl font-bold leading-tight text-white">
            We Make Designs that Lead and Inspire.
          </h2>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-white">
            <ArrowLeft size={22} />
          </button>

          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5865F2] text-white">
            <ArrowRight size={22} />
          </button>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">01.</span>

          <span className="text-xs font-medium text-white">
            Who We Are
          </span>
        </div>

        <h2 className="mt-5 text-[42px] font-bold leading-tight text-white">
          We Make Designs that Lead and Inspire.
        </h2>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <ArrowLeft className="text-white" size={20} />

            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5865F2] text-white">
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2 text-white">
            <span>2020</span>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAreHeader;