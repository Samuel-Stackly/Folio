import { ArrowDown } from "lucide-react";

function ScrollDown() {
  return (
    <div className="mt-20 flex items-center gap-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C58EFF] text-white">
        <ArrowDown size={20} />
      </div>

      <span className="text-lg font-medium text-gray-500">
        Scroll down
      </span>
    </div>
  );
}

export default ScrollDown;