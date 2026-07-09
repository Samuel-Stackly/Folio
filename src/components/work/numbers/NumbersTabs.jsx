import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const tabs = [
  "Overview",
  "Features",
  "Highlights",
  "Compatibility",
];

function NumbersTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <>
      {/* ================= Desktop ================= */}

      <div className="hidden lg:block">

        {/* Progress Line */}

        <div className="relative h-px bg-white/15">

          <div className="absolute left-0 top-0 h-px w-[25%] bg-[#5865F2]" />

        </div>

        {/* Tabs */}

        <div className="mt-8 flex justify-between">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                text-lg
                font-medium
                transition-all

                ${
                  activeTab === tab
                    ? "text-white"
                    : "text-[#8F90A5] hover:text-white"
                }
              `}
            >
              {tab}
            </button>
          ))}

        </div>

      </div>

      {/* ================= Mobile ================= */}

      <div className="flex items-center justify-between lg:hidden">

        {/* Left */}

        <div className="flex items-center gap-3">

          <button
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              text-white
            "
          >
            <ArrowLeft size={18} />
          </button>

          <button
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#5865F2]
              text-white
            "
          >
            <ArrowRight size={18} />
          </button>

        </div>

        {/* Dropdown */}

        <button
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-white/15
            px-5
            py-3
            text-white
          "
        >
          <span>{activeTab}</span>

          <ChevronDown size={18} />
        </button>

      </div>
    </>
  );
}

export default NumbersTabs;