import Button from "../common/Button";
import ScrollDown from "./ScrollDown";

function HeroContent() {
  return (
    <div className="py-10 lg:py-0">
      <h1
        className="
          text-[60px]
          font-bold
          leading-[1]
          tracking-[-0.03em]
          text-[#252547]
          lg:text-[88px]
        "
      >
        Stand Out
        <br />
        from The
        <br />
        Crowd.
      </h1>

      <p
        className="
          mt-8
          max-w-[470px]
          text-lg
          leading-9
          text-[#6E6E7A]
        "
      >
        Agency is a full-service agency, busy designing and
        building beautiful digital products, brands, and
        experiences.
      </p>

      <Button className="mt-10">
        Recent Work
      </Button>

      <ScrollDown />
    </div>
  );
}

export default HeroContent;