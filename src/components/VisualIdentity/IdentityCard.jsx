import Button from "../common/Button";

import IdentityItem from "./IdentityItem";

import editIcon from "../../assets/images/edit.png";
import highIcon from "../../assets/images/high.png";

function IdentityCard() {
  return (
    <div
      className="
        relative
        rounded-[36px]
        border
        border-[#F1F1F5]
        bg-white
        p-8
        shadow-[0_40px_80px_rgba(0,0,0,0.08)]

        lg:p-12
      "
    >
      {/* Items */}

      <div className="space-y-10">

        <IdentityItem
          icon={highIcon}
          title="Auto-updatable Global Styleguide"
        />

        <div className="h-px bg-[#ECECF3]" />

        <IdentityItem
          icon={editIcon}
          title="The number of applications and use cases is nearly endless."
        />

        <div className="h-px bg-[#ECECF3]" />

        <IdentityItem
          icon={highIcon}
          title="Auto-updatable Global Styleguide"
        />

      </div>

      {/* Contact Button */}

      <Button
        className="
          mt-12
          w-full
          justify-center
        "
      >
        Contact Us
      </Button>

    </div>
  );
}

export default IdentityCard;