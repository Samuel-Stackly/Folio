import heroBg from "../../assets/images/hero-bgcomp.png";
import heroComp from "../../assets/images/hero-comp.svg";

function HeroImage() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-[700px] lg:mt-0">
      {/* Purple Background */}
      <img
        src={heroBg}
        alt=""
        className="ml-auto w-[82%]"
      />

      {/* Computer Illustration */}
      <img
        src={heroComp}
        alt="Hero Illustration"
        className="
          absolute
          bottom-[8%]
          left-[42%]
          w-[132%]
          max-w-none
          -translate-x-1/2
        "
      />
    </div>
  );
}

export default HeroImage;