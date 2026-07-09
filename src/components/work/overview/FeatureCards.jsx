import FeatureCard from "./FeatureCard";

import editImage from "../../../assets/images/edit.png";
import highImage from "../../../assets/images/high.png";

function FeatureCards() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-2 gap-8">

        <FeatureCard
          image={editImage}
          title="Fully Editable"
        />

        <FeatureCard
          image={highImage}
          title="High Resolution"
        />

      </div>

      {/* Mobile */}
      <div className="space-y-6 lg:hidden">

        {/* Figma shows High Resolution first on mobile */}

        <FeatureCard
          image={highImage}
          title="High Resolution"
        />

        <FeatureCard
          image={editImage}
          title="Fully Editable"
        />

      </div>
    </>
  );
}

export default FeatureCards;